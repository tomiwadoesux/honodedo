"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ isLoading, onLoadingComplete }) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay before starting fade out
      const timer = setTimeout(() => {
        setShouldRender(false);
        onLoadingComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  if (!shouldRender && !isLoading) {
    return null;
  }

  return (
    <div className={`loading-screen ${!isLoading ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
          opacity: 1;
          visibility: visible;
        }

        .loading-screen--fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loading-content {
          text-align: center;
          color: white;
        }

        .loading-spinner {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 24px;
        }

        .spinner-dot {
          width: 12px;
          height: 12px;
          background: #4f46e5;
          border-radius: 50%;
          animation: loading-bounce 1.4s ease-in-out infinite both;
        }

        .spinner-dot:nth-child(1) {
          animation-delay: -0.32s;
        }

        .spinner-dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        .loading-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #e5e7eb;
          letter-spacing: 0.5px;
          animation: text-pulse 2s ease-in-out infinite;
        }

        @keyframes loading-bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes text-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .loading-text {
            font-size: 16px;
          }

          .spinner-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
}