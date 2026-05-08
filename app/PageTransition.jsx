"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Subtle per-route reveal: when the URL changes we restart the
 * `page-reveal` keyframe by toggling the class. This avoids unmounting
 * the children (which would lose scroll position and reflow heavy DOM)
 * while still giving each page a quiet entrance.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Force a reflow so the animation re-runs on the same element
    el.classList.remove("page-transition");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void el.offsetWidth;
    el.classList.add("page-transition");
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
