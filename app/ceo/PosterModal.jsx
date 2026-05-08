"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import styles from "./ceo.module.css";

/**
 * Click-to-zoom wrapper around the profile poster. Uses
 * react-photoswipe-gallery (already present in the project) so the
 * lightbox styling matches /listings.
 *
 * The poster is a portrait WebP (~905x1280). We pass those exact
 * dimensions to <Item> so PhotoSwipe knows the natural size and the
 * open-animation lands precisely.
 */
export default function PosterModal({ src, alt, caption }) {
  return (
    <Gallery>
      <figure className={styles.summaryPoster}>
        <Item original={src} thumbnail={src} width={905} height={1280}>
          {({ ref, open }) => (
            <button
              type="button"
              ref={ref}
              onClick={open}
              className={styles.summaryPosterButton}
              aria-label={`Open ${alt} in a larger view`}
            >
              <img
                src={src}
                alt={alt}
                className={styles.summaryPosterImg}
                loading="lazy"
              />
              <span className={styles.summaryPosterZoomHint} aria-hidden="true">
                Click to enlarge
              </span>
            </button>
          )}
        </Item>
        {caption ? (
          <figcaption className={styles.summaryPosterCaption}>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Gallery>
  );
}
