// app/layout.js
import "swiper/css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "photoswipe/dist/photoswipe.css";
import "tippy.js/dist/tippy.css";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Hon Odedo",
  description: "Hon Odedo - Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-mobile no-touch">
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="appear-animate body">
        {/* Static Loading Screen - Appears immediately */}
        <div id="initial-loading-screen" className="initial-loading-screen">
          <div className="initial-loading-content">
            <div className="initial-loading-spinner">
              <div className="initial-spinner-dot"></div>
              <div className="initial-spinner-dot"></div>
              <div className="initial-spinner-dot"></div>
            </div>
            <div className="initial-loading-text">Loading...</div>
          </div>
        </div>

        {/* Main Content - Hidden initially */}
        <div id="main-content" className="main-content-hidden">
          <ClientWrapper>{children}</ClientWrapper>
        </div>

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

              var minLoadingTime = 800; // Minimum loading time in ms

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