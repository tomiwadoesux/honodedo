"use client";

import AppButton from "./AppButton";

/**
 * Thin alias for the universal <AppButton variant="line">.
 * Kept so existing call-sites that import UnderlineArrowButton continue
 * to work without churn. New code should prefer AppButton directly.
 */
export default function UnderlineArrowButton({ color, ...rest }) {
  return <AppButton variant="line" color={color} {...rest} />;
}
