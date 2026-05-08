"use client";

import Link from "next/link";
import { motion } from "motion/react";
import styles from "./app-button.module.css";

/**
 * Universal site button.
 *
 * One component, four visual variants — same size scale across all of them
 * so a `<AppButton size="md">` is the same vertical rhythm whether it's
 * filled, line (uppercase underline), link (underlined text), or text
 * (bare).
 *
 * Props:
 *   variant : "filled" | "line" | "link" | "text"   (default "filled")
 *   color   : any CSS color value — overrides the variant's default fill
 *             (filled bg + border) or text color (line/link/text).
 *   size    : "sm" | "md" | "lg"                    (default "md")
 *   icon    : boolean — whether to render the trailing → arrow.
 *             Defaults to true except for variant="text".
 *   href    : if set, renders a Next <Link> (or <a> for hash/external).
 *             Otherwise renders a <button>.
 *   onClick / type / target / rel : passed through.
 *
 * Example:
 *   <AppButton variant="filled" color="#ED3237" size="lg">Send</AppButton>
 *   <AppButton variant="line"   href="/ceo">Read profile</AppButton>
 *   <AppButton variant="link"   href="/about">About us</AppButton>
 *   <AppButton variant="text"   onClick={...}>Cancel</AppButton>
 */

const SIZE = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

const VARIANT = {
  filled: styles.filled,
  line: styles.line,
  link: styles.link,
  text: styles.text,
};

export default function AppButton({
  variant = "filled",
  color,
  size = "md",
  icon,
  href,
  onClick,
  type = "button",
  target,
  rel,
  className = "",
  children,
  ...rest
}) {
  // Default the arrow to TRUE for filled/line/link, FALSE for text.
  const showIcon = icon ?? variant !== "text";

  // Color override: filled uses it as the bg (and border to match);
  // line/link/text use it as the text color.
  const styleVars = color
    ? variant === "filled"
      ? {
          "--btn-bg": color,
          "--btn-bd": color,
          // Pick a slightly darker hover automatically — fall back to
          // pure black if we can't compute one (CSS color-mix handles
          // both rgb and hex values).
          "--btn-bg-hover": `color-mix(in srgb, ${color}, black 14%)`,
        }
      : { "--btn-fg": color }
    : undefined;

  const classes = [
    styles.btn,
    VARIANT[variant] || VARIANT.filled,
    SIZE[size] || SIZE.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <motion.span
      className={classes}
      style={styleVars}
      whileHover={variant === "filled" ? { y: -1 } : undefined}
      whileTap={variant === "filled" ? { scale: 0.97 } : undefined}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <span>{children}</span>
      {showIcon ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </motion.span>
  );

  // External / hash anchor
  if (href && (href.startsWith("#") || /^https?:\/\//.test(href))) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={styles.wrap}
        {...rest}
      >
        {content}
      </a>
    );
  }

  // Internal Next link
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={styles.wrap}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Plain button
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.wrap}
      {...rest}
    >
      {content}
    </button>
  );
}
