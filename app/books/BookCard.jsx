"use client";

import { useState } from "react";
import styles from "./books.module.css";

/**
 * One book on the catalogue grid.
 *
 * Visual: a real-cover scan that hinges open on hover (desktop) or tap
 * (mobile), revealing a printed "title page" behind the cover. The
 * cover rotates around its left edge with `transform-origin: left center`
 * inside a `perspective` container, so it reads as a real book opening.
 *
 * On touch devices the card starts a controlled "open" state when tapped
 * and toggles closed on a second tap or when another card is tapped.
 */
export default function BookCard({ book }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`${styles.book} ${open ? styles.bookOpen : ""}`}
    >
      <button
        type="button"
        className={styles.bookButton}
        aria-expanded={open}
        aria-label={`${book.title}${open ? " — close preview" : " — open preview"}`}
        onClick={() => setOpen((o) => !o)}
        /* Mouse leaves the card → close. Touch devices don't fire a
           pointerleave with `pointerType === "mouse"`, so the open
           state still persists across taps as expected. Without this
           guard, a desktop click stuck the card in the open state
           even after the cursor had moved off. */
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse" && open) setOpen(false);
        }}
        onBlur={() => open && setOpen(false)}
      >
        <div
          className={styles.cover}
          style={book.coverColor ? { "--book-color": book.coverColor } : undefined}
        >
          {/* Title page behind the cover — its bg is the book's major
              colour with a black overlay on top, so the title text reads
              well regardless of which book it belongs to. */}
          <div className={styles.coverPage} aria-hidden={!open}>
            <span className={styles.coverPageEyebrow}>By</span>
            <span className={styles.coverPageAuthor}>Hon. Charles Odedo</span>
            <span className={styles.coverPageRule} />
            <h3 className={styles.coverPageTitle}>{book.title}</h3>
            {book.subtitle ? (
              <p className={styles.coverPageSubtitle}>{book.subtitle}</p>
            ) : null}
            {book.summary ? (
              <p className={styles.coverPageSummary}>{book.summary}</p>
            ) : null}
          </div>

          {/* The actual cover scan, hinged on its left edge. */}
          <div className={styles.coverFront}>
            <img
              src={book.cover}
              alt={`Cover of ${book.title} by Hon. Charles Odedo`}
              className={styles.coverImg}
              loading="lazy"
            />
          </div>
        </div>
      </button>

      <div className={styles.bookMeta}>
        <h4 className={styles.bookTitle}>{book.title}</h4>
        {book.subtitle ? (
          <p className={styles.bookSubtitle}>{book.subtitle}</p>
        ) : null}
      </div>
    </article>
  );
}
