// app/ClientWrapper.js
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

export default function ClientWrapper({ children }) {
  const path = usePathname();

  useEffect(() => {
    // Initialize client-side effects
    const initializeEffects = () => {
      try {
        init_wow();
        parallaxMouseMovement();

        const mainNav = document.querySelector(".main-nav");
        if (mainNav?.classList.contains("transparent")) {
          mainNav.classList.add("js-transparent");
        } else if (!mainNav?.classList?.contains("dark")) {
          mainNav?.classList.add("js-no-transparent-white");
        }

        window.addEventListener("scroll", headerChangeOnScroll);
        parallaxScroll();

        // Notify that client effects are ready
        window.dispatchEvent(new CustomEvent('clientEffectsReady'));
      } catch (error) {
        console.warn("Error initializing client effects:", error);
        // Still dispatch event even if there's an error
        window.dispatchEvent(new CustomEvent('clientEffectsReady'));
      }
    };

    initializeEffects();

    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);

  useEffect(() => {
    // Import Bootstrap on client-side only
    import("bootstrap/dist/js/bootstrap.esm")
      .then(() => {
        // Notify that Bootstrap is ready
        window.dispatchEvent(new CustomEvent('bootstrapReady'));
      })
      .catch(() => {
        // Silently handle import errors but still notify
        window.dispatchEvent(new CustomEvent('bootstrapReady'));
      });
  }, []);

  return <>{children}</>;
}