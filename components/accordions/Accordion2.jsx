"use client";

import { faqDataMain } from "@/data/faqs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styles from "./accordion2.module.css";

const PAGE_SIZE = 4;

export default function Accordion2({ faqData = faqDataMain }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const total = faqData.length;
  const shown = Math.min(visible, total);
  const allShown = shown >= total;

  const visibleItems = faqData.slice(0, shown);

  const handleToggle = () => {
    if (allShown) {
      setVisible(PAGE_SIZE);
      // If a hidden row was open, close it
      if (openIndex !== null && openIndex >= PAGE_SIZE) setOpenIndex(null);
    } else {
      setVisible((v) => Math.min(v + PAGE_SIZE, total));
    }
  };

  return (
    <div>
      <div className={styles.list}>
        {visibleItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={index}
              className={styles.item}
              data-open={isOpen || undefined}
            >
              <button
                type="button"
                className={styles.head}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-body-${index}`}
              >
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <span className={styles.toggleBar} />
                  <span className={`${styles.toggleBar} ${styles.toggleBarV}`} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`accordion-body-${index}`}
                    className={styles.body}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.32, ease: [0.32, 0.72, 0.24, 1] },
                      opacity: { duration: 0.22, ease: "easeOut" },
                    }}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      {total > PAGE_SIZE && (
        <button
          type="button"
          className={styles.toggleAll}
          onClick={handleToggle}
        >
          <span className={styles.toggleAllLabel}>
            {allShown ? "Show less" : "Show more"}
          </span>
          <span className={styles.toggleAllCount} aria-hidden="true">
            {allShown ? `01 / ${String(total).padStart(2, "0")}` : `${String(shown).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
          </span>
          <span
            className={styles.toggleAllArrow}
            data-flip={allShown || undefined}
            aria-hidden="true"
          >
            ↓
          </span>
        </button>
      )}
    </div>
  );
}
