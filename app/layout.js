// app/layout.js
import "swiper/css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "photoswipe/dist/photoswipe.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ClientWrapper from "./ClientWrapper";
import LenisProvider from "./LenisProvider";
import Loader from "./Loader";
import PageTransition from "./PageTransition";
import HeaderModern from "@/components/headers/HeaderModern";
import { fancyMultipage } from "@/data/menu";

export const metadata = {
  title: "Hon Odedo",
  description: "Hon Odedo - Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-mobile no-touch">
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Display: Fraunces (variable, optical-size axis) for editorial moments */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&display=swap"
          rel="stylesheet"
        />
        {/* Body: Plus Jakarta Sans (kept from before — clean, refined) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..700;1,300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="appear-animate body">
        {/* Logo loader — appears immediately, dismissed by inline script below */}
        <Loader />

        {/* Main Content - Hidden initially.
            LenisProvider wraps the whole content so smooth scroll applies
            site-wide without hijacking pages that opt out via
            data-lenis-prevent on a scrollable element. */}
        <LenisProvider>
          <div id="main-content" className="main-content-hidden">
            {/* Persistent header — sits above page transitions so its state survives navigation */}
            <HeaderModern links={fancyMultipage} />
            <ClientWrapper>
              <PageTransition>{children}</PageTransition>
            </ClientWrapper>
          </div>
        </LenisProvider>

        {/* Vercel Analytics — sits in the root layout so it tracks every
            route in the app (no need to add it per-page). Beacons are
            sent only in production; localhost / dev are no-ops. */}
        <Analytics />

        {/* Inline JavaScript for immediate loading control */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var loadingTasks = {
                pageLoaded: false,
                clientEffects: false,
                bootstrap: false,
                minDelay: false
              };

              // Hold long enough for the logo wipe + breathe to complete (~1100ms wipe + buffer)
              var minLoadingTime = 1500;

              function checkAllReady() {
                var allReady = Object.values(loadingTasks).every(function(task) { return task; });

                if (allReady) {
                  hideLoadingScreen();
                }
              }

              function hideLoadingScreen() {
                var loadingScreen = document.getElementById('initial-loading-screen');
                var mainContent = document.getElementById('main-content');

                if (loadingScreen && loadingScreen.style.display !== 'none') {
                  loadingScreen.classList.add('initial-loading-screen--fade-out');
                  setTimeout(function() {
                    loadingScreen.style.display = 'none';
                  }, 600);
                }

                if (mainContent && !mainContent.classList.contains('main-content-visible')) {
                  mainContent.classList.remove('main-content-hidden');
                  mainContent.classList.add('main-content-visible');
                }
              }

              // Listen for page load
              window.addEventListener('load', function() {
                loadingTasks.pageLoaded = true;
                checkAllReady();
              });

              // Listen for client effects ready
              window.addEventListener('clientEffectsReady', function() {
                loadingTasks.clientEffects = true;
                checkAllReady();
              });

              // Listen for Bootstrap ready
              window.addEventListener('bootstrapReady', function() {
                loadingTasks.bootstrap = true;
                checkAllReady();
              });

              // Minimum loading delay
              setTimeout(function() {
                loadingTasks.minDelay = true;
                checkAllReady();
              }, minLoadingTime);

              // Fallback: Hide loading after 4 seconds regardless
              setTimeout(function() {
                console.warn('Loading screen fallback triggered - hiding after 4 seconds');
                hideLoadingScreen();
              }, 4000);
            })();
          `
        }} />
      </body>
    </html>
  );
}