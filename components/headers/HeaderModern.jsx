"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import FilledArrowButton from "@/components/common/FilledArrowButton";
import styles from "./header-modern.module.css";

// Use isomorphic effect to avoid SSR warnings while measuring DOM rects.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const TRAVEL_S = 0.6; // seconds — single underline-to-underline slide
// Slowed down so the per-letter bold cascade is actually visible —
// previously 28ms × ~7 letters = under 200ms total, finishing before the
// eye could track each step. New ~75ms × 7 letters ≈ 525ms reads as a
// deliberate ripple of weight across the word.
const LETTER_STEP_MS = 75;
const LETTER_FADE_MS = 320;

const buttonSpring = { type: "spring", stiffness: 380, damping: 28 };

/* -----------------------------------------------------------------------------
 * Letter-by-letter cascade.
 * Each letter is a span using a variable-font weight (`font-variation-settings`)
 * so the transition is smooth and doesn't reflow letter widths much.
 * -------------------------------------------------------------------------- */
function CascadeLabel({ label, isActive, transition }) {
  // transition: 'enter-from-left' | 'enter-from-right' | 'leave-to-left' | 'leave-to-right' | null
  const letters = useMemo(() => Array.from(label), [label]);
  const total = letters.length;

  return (
    <span className={styles.label} aria-label={label}>
      {letters.map((ch, i) => {
        // Decide each letter's transition delay based on the click direction.
        // - "enter-from-left"  : new letters bold from leftmost → rightmost  (i)
        // - "enter-from-right" : new letters bold from rightmost → leftmost  (total-1-i)
        // - "leave-to-left"    : current letters un-bold rightmost → leftmost (total-1-i)
        // - "leave-to-right"   : current letters un-bold leftmost → rightmost (i)
        let delay = 0;
        if (transition === "enter-from-left" || transition === "leave-to-right") {
          delay = i * LETTER_STEP_MS;
        } else if (transition === "enter-from-right" || transition === "leave-to-left") {
          delay = (total - 1 - i) * LETTER_STEP_MS;
        }
        return (
          <span
            key={i}
            className={styles.letter}
            data-bold={isActive || undefined}
            style={{ "--letter-delay": `${delay}ms` }}
          >
            {ch === " " ? " " : ch}
          </span>
        );
      })}
    </span>
  );
}

/* -----------------------------------------------------------------------------
 * Header
 * -------------------------------------------------------------------------- */
export default function HeaderModern({ links = [] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pre-compute "active path" for each link.
  const navLinks = useMemo(
    () =>
      links.map((l) => ({
        ...l,
        // Strip any hash for matching purposes.
        path: (l.href.split("#")[0] || "/").replace(/\/+$/, "") || "/",
      })),
    [links]
  );

  // Sticky last-matched nav index. When we navigate to a page that isn't
  // in the primary nav (e.g. /books, /ceo), we keep the previously-matched
  // link as "active" so:
  //   1. The bold cascade on the previous active link doesn't suddenly
  //      drop on those non-nav pages.
  //   2. When the user clicks back into the nav, prev is a real index
  //      (not -1), so the underline animation runs from there to the new
  //      target instead of vanishing/reappearing.
  const lastMatchedRef = useRef(-1);

  // Active index based on pathname.
  const activeIndex = useMemo(() => {
    const cur = (pathname || "/").replace(/\/+$/, "") || "/";
    let best = -1;
    let bestLen = -1;
    navLinks.forEach((l, i) => {
      if (l.path === cur) {
        if (l.path.length > bestLen) {
          best = i;
          bestLen = l.path.length;
        }
      } else if (l.path !== "/" && cur.startsWith(l.path + "/")) {
        if (l.path.length > bestLen) {
          best = i;
          bestLen = l.path.length;
        }
      }
    });
    if (best >= 0) {
      lastMatchedRef.current = best;
      return best;
    }
    // No direct match (e.g. /ceo, /books) — keep showing the last matched
    // link as active. Returns -1 only on a cold load to a non-nav page.
    return lastMatchedRef.current;
  }, [pathname, navLinks]);

  // Track previous active index to know the direction of motion.
  const prevIndexRef = useRef(activeIndex);
  // The "transition state" passed down to letter cascades.
  const [letterPhase, setLetterPhase] = useState(null);

  // Refs for each link element so we can read their bounding rects.
  const linkRefs = useRef([]);
  const containerRef = useRef(null);
  const [underlineScope, animateUnderline] = useAnimate();
  const seqRef = useRef(0); // serial token to abort stale animations

  // Measure a link's underline geometry relative to the nav container.
  // We measure the inner text label (not the whole padded link) so the
  // underline sits tight under the text — not stretched across the link's
  // hover padding, and only a few pixels below the baseline.
  const measure = (idx) => {
    const el = linkRefs.current[idx];
    const cont = containerRef.current;
    if (!el || !cont) return null;
    const label = el.querySelector(`.${styles.label}`) || el;
    const a = label.getBoundingClientRect();
    const b = cont.getBoundingClientRect();
    return {
      x: a.left - b.left,
      y: a.bottom - b.top + 3, // 3px gap between text baseline and underline
      width: a.width,
    };
  };

  // Initial position the underline at the active link without animating.
  useIsoLayoutEffect(() => {
    if (activeIndex < 0) return;
    const m = measure(activeIndex);
    if (!m || !underlineScope.current) return;
    underlineScope.current.style.opacity = "1";
    underlineScope.current.style.transform = `translate3d(${m.x}px, 0, 0)`;
    underlineScope.current.style.width = `${m.width}px`;
    underlineScope.current.style.height = `2px`;
    underlineScope.current.style.borderRadius = `1px`;
    underlineScope.current.style.top = `${m.y - 2}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On pathname change: animate underline + trigger letter cascades.
  useIsoLayoutEffect(() => {
    const prev = prevIndexRef.current;
    const next = activeIndex;
    if (prev === next) return;

    // Going to a no-active state (cold load on a non-nav page that hasn't
    // yet pinned a last-matched index) — fade out the underline.
    if (next < 0) {
      const el = underlineScope.current;
      if (el) el.style.opacity = "0";
      setLetterPhase(null);
      prevIndexRef.current = next;
      return;
    }

    // Coming from no-active (e.g. cold-loaded /books then clicked About) —
    // pop the underline in at the new link position without sliding from
    // off-screen. Letter cascade still runs to bold the entering link.
    if (prev < 0) {
      const m = measure(next);
      const el = underlineScope.current;
      if (m && el) {
        el.style.transform = `translate3d(${m.x}px, 0, 0)`;
        el.style.width = `${m.width}px`;
        el.style.top = `${m.y - 2}px`;
        el.style.opacity = "1";
      }
      // Cascade in from the natural reading direction so the new label
      // bolds smoothly.
      setLetterPhase({
        leaving: -1,
        entering: next,
        leave: null,
        enter: "enter-from-left",
      });
      const seq = ++seqRef.current;
      setTimeout(() => {
        if (seq === seqRef.current) setLetterPhase(null);
      }, 60 + LETTER_STEP_MS * 8 + LETTER_FADE_MS);
      prevIndexRef.current = next;
      return;
    }

    const a = measure(prev);
    const b = measure(next);
    if (!a || !b) {
      prevIndexRef.current = next;
      return;
    }

    const goingRight = next > prev;

    // Letter cascade phase — runs in parallel with the underline travel.
    setLetterPhase(
      goingRight
        ? { leaving: prev, entering: next, leave: "leave-to-right", enter: "enter-from-left" }
        : { leaving: prev, entering: next, leave: "leave-to-left", enter: "enter-from-right" }
    );

    // Underline animation: a single slide from `a` to `b`. The width and
    // x-position both interpolate together with one eased curve so the line
    // glides over and resizes to fit the target.
    const seq = ++seqRef.current;
    const el = underlineScope.current;
    if (!el) return;

    (async () => {
      await animateUnderline(
        el,
        {
          x: b.x,
          width: b.width,
          top: b.y - 2,
        },
        { duration: TRAVEL_S, ease: [0.32, 0.72, 0.24, 1] }
      );
      if (seq !== seqRef.current) return;
      // Clear letter phase after the cascade completes.
      setTimeout(() => {
        if (seq === seqRef.current) setLetterPhase(null);
      }, 60);
    })();

    prevIndexRef.current = next;
  }, [activeIndex]);

  // Reposition underline if window resizes.
  useEffect(() => {
    const onResize = () => {
      if (activeIndex < 0) return;
      const m = measure(activeIndex);
      if (!m || !underlineScope.current) return;
      underlineScope.current.style.transform = `translate3d(${m.x}px, 0, 0)`;
      underlineScope.current.style.width = `${m.width}px`;
      underlineScope.current.style.top = `${m.y - 2}px`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, underlineScope]);

  // Scroll behaviour:
  //   "top"     — within the first viewport: full-width, solid white.
  //   "hidden"  — past 100vh and still scrolling DOWN: slides up off-screen.
  //   "compact" — past 100vh and scrolling UP: slides back in, narrower.
  // `scrolled` (legacy) is kept for the translucent/blurred bg state.
  const [navState, setNavState] = useState("top");
  const lastYRef = useRef(0);
  useEffect(() => {
    lastYRef.current = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      const threshold = window.innerHeight - 80;
      const dir = cur > lastYRef.current ? "down" : "up";

      if (cur <= threshold) {
        setNavState("top");
        setScrolled(false);
      } else {
        setScrolled(true);
        // Add a small dead-zone so tiny jitters don't toggle hidden/compact.
        if (Math.abs(cur - lastYRef.current) > 4) {
          setNavState(dir === "down" ? "hidden" : "compact");
        }
      }
      lastYRef.current = cur;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mobile drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isOnHome = pathname === "/";
  const contactHref = isOnHome ? "#contact" : "/#contact";

  return (
    <header
      className={styles.headerWrap}
      data-scrolled={scrolled || undefined}
      data-state={navState}
    >
      <div className={styles.bar}>
        {/* LEFT: logo + brand name */}
        <Link href="/" className={styles.logoLink} aria-label="Honourable Odedo home">
          <img src="/assets/images/logo.svg" alt="" className={styles.logoMark} />
          <span className={styles.logoText}>Honourable Odedo</span>
        </Link>

        {/* CENTER: nav (centered in the viewport via grid 1fr / auto / 1fr) */}
        <nav className={styles.navWrap} aria-label="Primary">
          <ul className={styles.nav} ref={containerRef}>
            {navLinks.map((link, i) => {
              const isActive = i === activeIndex;
              const transitionFor =
                letterPhase && letterPhase.leaving === i
                  ? letterPhase.leave
                  : letterPhase && letterPhase.entering === i
                  ? letterPhase.enter
                  : null;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    ref={(el) => (linkRefs.current[i] = el)}
                    className={styles.link}
                    data-active={isActive || undefined}
                  >
                    <CascadeLabel
                      label={link.text}
                      isActive={isActive}
                      transition={transitionFor}
                    />
                  </Link>
                </li>
              );
            })}
            {/* The travelling underline / dot */}
            <span
              ref={underlineScope}
              className={styles.underline}
              aria-hidden="true"
            />
          </ul>
        </nav>

        {/* RIGHT: contact CTA — shared component */}
        <div className={styles.cta}>
          <FilledArrowButton href={contactHref}>Contact us</FilledArrowButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open || undefined} />
          <span data-open={open || undefined} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={styles.drawer} data-open={open || undefined} aria-hidden={!open}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
          <li>
            {isOnHome ? (
              <a href={contactHref} className={styles.drawerCta}>Contact us</a>
            ) : (
              <Link href={contactHref} className={styles.drawerCta}>Contact us</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
