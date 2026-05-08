"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Site-wide smooth scroll. Wraps the app at the layout level. The hook
 * mounts a single Lenis instance, drives its rAF loop, and cleans up on
 * unmount.
 *
 * Why these settings:
 *   - duration: 1.1s    → eases scroll over ~1s for a calm feel without
 *                          dragging the user behind the wheel.
 *   - easing: a soft expo curve that decelerates strongly at the end so
 *            stops feel intentional, not abrupt.
 *   - smoothWheel: smooth out trackpad / mousewheel inertia.
 *   - smoothTouch: false  → preserve native fast-flick on iOS/Android.
 *   - touchMultiplier: 2  → typical for touch surfaces.
 *
 * Scroll-on-route-change: the second effect resets the scroll position
 * to 0 whenever the URL changes. Next's default scroll-restore goes
 * through `window.scrollTo`, but Lenis manages its own position via
 * transforms and ignores that — so without this, navigating to /books
 * from a scrolled-down state landed mid-page.
 */
export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Snap to top on every route change. `immediate: true` skips the
    // ease, so the user isn't watching a 1-second scroll animation when
    // they expected an instant page jump.
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}
