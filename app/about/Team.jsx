"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { teamMembers } from "@/data/team";
import FilledArrowButton from "@/components/common/FilledArrowButton";
import UnderlineArrowButton from "@/components/common/UnderlineArrowButton";
import styles from "./team.module.css";

const CLOSE_MS = 280;

export default function Team() {
  const [active, setActive] = useState(null);
  const [phase, setPhase] = useState("idle");
  const closeTimer = useRef(null);

  const open = useCallback(
    (member) => {
      if (phase !== "idle") return;
      setActive(member);
      setPhase("opening");
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("open"));
      });
    },
    [phase]
  );

  const close = useCallback(() => {
    if (phase === "idle" || phase === "closing") return;
    setPhase("closing");
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setPhase("idle");
      setActive(null);
      document.body.style.overflow = "";
    }, CLOSE_MS);
  }, [phase]);

  useEffect(() => {
    if (phase === "idle") return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, close]);

  useEffect(
    () => () => {
      clearTimeout(closeTimer.current);
      document.body.style.overflow = "";
    },
    []
  );

  // Pre-decode the staff images so the modal flight is smooth.
  useEffect(() => {
    teamMembers.slice(1).forEach((m) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = m.image;
    });
  }, []);

  const ceo = teamMembers[0];
  const others = teamMembers.slice(1);

  return (
    <section className={styles.teamSection} id="team">
      <div className="container">
        {/* Featured CEO row — NOT clickable, has its own buttons. */}
        <article className={styles.featured}>
          <div className={styles.featuredImageWrap}>
            <img
              src={ceo.image}
              alt={ceo.name}
              loading="eager"
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredBody}>
            <span className={styles.featuredEyebrow}>{ceo.role}</span>
            <h3 className={styles.featuredName}>
              Hon.{" "}
              <span className={styles.featuredNameItalic}>Odedo</span>
            </h3>
            <p className={styles.featuredBio}>{ceo.bio}</p>
            <div className={styles.featuredActions}>
              <UnderlineArrowButton href="/ceo">Read profile</UnderlineArrowButton>
              <FilledArrowButton href="/books" size="md">Books by CEO</FilledArrowButton>
            </div>
          </div>
        </article>

        {/* Wider team — labelled simply "The team" */}
        <div className={styles.subhead}>
          <span className={styles.subheadEyebrow}>The team</span>
          <span className={styles.subheadRule} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {others.map((m, i) => (
            <button
              key={m.id}
              type="button"
              className={styles.gridCard}
              onClick={() => open(m)}
              aria-label={`Open ${m.name} profile`}
            >
              <div className={styles.cardImageWrap}>
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardMeta}>
                <h4 className={styles.cardName}>{m.name}</h4>
                <p className={styles.cardRole}>{m.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <Modal
          member={active}
          phase={phase}
          onClose={close}
        />
      )}
    </section>
  );
}

function Modal({ member, phase, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isOpen = phase === "open";
  const isClosing = phase === "closing";

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={[
        styles.modalRoot,
        isOpen ? styles.modalOpen : "",
        isClosing ? styles.modalClosing : "",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />

      <div className={styles.cardWrap}>
        <div className={styles.modalCard}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className={styles.cardInner}>
            <div className={styles.imageSlot} aria-hidden="true">
              <img src={member.image} alt="" className={styles.imageSlotImage} />
            </div>

            <div className={styles.body}>
              <h3 className={`${styles.name} ${styles.reveal}`} style={{ "--d": "0ms" }}>
                {member.name}
              </h3>
              <p className={`${styles.role} ${styles.reveal}`} style={{ "--d": "60ms" }}>
                {member.role}
              </p>
              <p className={`${styles.bio} ${styles.reveal}`} style={{ "--d": "120ms" }}>
                {member.bio}
              </p>
              <div className={`${styles.socials} ${styles.reveal}`} style={{ "--d": "180ms" }}>
                {/* Real platform logos — filled vector marks for each
                    network so the icons read as familiar at a glance. */}
                {member.socials?.x && (
                  <a
                    href={member.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className={styles.socialBtn}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path
                        d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.74-6.2L4.8 22H2.04l6.97-7.96L2 2h6.91l4.28 5.66L18.244 2Zm-1.19 18h1.58L7.03 4H5.36l11.694 16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {member.socials?.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className={styles.socialBtn}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85C2.295 5.784 2.569 4.517 3.544 3.542 4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.175 8.798 2.163 12 2.163Zm0 1.802c-3.149 0-3.51.011-4.756.067-.971.044-1.504.207-1.857.344a3.097 3.097 0 0 0-1.122.731 3.097 3.097 0 0 0-.731 1.122c-.137.353-.3.886-.344 1.857-.056 1.246-.067 1.607-.067 4.756s.011 3.51.067 4.756c.044.971.207 1.504.344 1.857.18.456.412.785.731 1.122.337.319.666.551 1.122.731.353.137.886.3 1.857.344 1.246.056 1.607.067 4.756.067s3.51-.011 4.756-.067c.971-.044 1.504-.207 1.857-.344a3.097 3.097 0 0 0 1.122-.731 3.097 3.097 0 0 0 .731-1.122c.137-.353.3-.886.344-1.857.056-1.246.067-1.607.067-4.756s-.011-3.51-.067-4.756c-.044-.971-.207-1.504-.344-1.857a3.097 3.097 0 0 0-.731-1.122 3.097 3.097 0 0 0-1.122-.731c-.353-.137-.886-.3-1.857-.344-1.246-.056-1.607-.067-4.756-.067Zm0 3.063a4.972 4.972 0 1 1 0 9.944 4.972 4.972 0 0 1 0-9.944Zm0 1.802a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34Zm5.18-2.04a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className={styles.socialBtn}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path
                        d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>,
    document.body
  );
}
