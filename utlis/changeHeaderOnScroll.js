// Legacy scroll handler — the modern site doesn't render a `.main-nav`
// element (the new header is `<HeaderModern>`), so most of this becomes
// a no-op. We keep the function as a stub so other modules that import it
// don't break, and so window.removeEventListener references the same
// callback.
//
// Without the early return below, every scroll threw
// `TypeError: Cannot read properties of null (reading 'classList')`
// because querySelector(".main-nav") returns null. Those errors flooded
// the browser console and broke unrelated runtime work (e.g. PhotoSwipe's
// click handler on /listings).
export const headerChangeOnScroll = () => {
  const mainNav = document.querySelector(".main-nav");
  if (!mainNav) return;

  const navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
  const lightAfterScroll = document.querySelector(".light-after-scroll");

  if (window.scrollY > 0) {
    mainNav.classList.remove("transparent");
    mainNav.classList.add("small-height", "body-scrolled");
    if (navLogoWrapLogo) navLogoWrapLogo.classList.add("small-height");
    if (lightAfterScroll) lightAfterScroll.classList.remove("dark");
  } else if (window.scrollY === 0) {
    mainNav.classList.add("transparent");
    mainNav.classList.remove("small-height", "body-scrolled");
    if (navLogoWrapLogo) navLogoWrapLogo.classList.remove("small-height");
    if (lightAfterScroll) lightAfterScroll.classList.add("dark");
  }
};
