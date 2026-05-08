"use client";

import AppButton from "./AppButton";

/**
 * Thin alias for the universal <AppButton variant="filled">.
 * Kept so existing call-sites that import FilledArrowButton continue to
 * work without churn. New code should prefer AppButton directly so the
 * variant is explicit at the call site.
 */
export default function FilledArrowButton({
  bg,
  fg,
  hoverBg,
  color,
  ...rest
}) {
  // Old prop names mapped onto AppButton's `color` API. `bg` (or the
  // shorter `color`) wins; `fg` and `hoverBg` are no-ops in the new
  // single-component model and intentionally ignored.
  return <AppButton variant="filled" color={color || bg} {...rest} />;
}
