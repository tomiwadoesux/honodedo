"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CAR_W = 300; // intrinsic car illustration width
const CAR_H = 74;

// How far across the viewport the car travels at progress=1, expressed as
// a fraction of the viewport width. < 1 means the car never reaches the
// right edge — keeps the motion calm and the composition uncluttered.
const TRAVEL_RATIO = 0.45;

// easeInOutCubic — slow start, light acceleration through the middle,
// graceful settle at the end. Pleasant on long scrolls because it never
// looks linear (engineered) and never looks bouncy (gimmicky).
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function About() {
  const carRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current;
      const car = carRef.current;
      if (!track || !car) return;

      // Linear progress: 0 when the section enters the viewport,
      // 1 when it leaves.
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const linearProgress = Math.max(0, Math.min(1, (vh - rect.top) / total));

      // Run progress through the easing curve so the car accelerates and
      // decelerates instead of marching at a constant rate.
      const eased = easeInOutCubic(linearProgress);

      // Car starts off-screen on the left and travels only TRAVEL_RATIO of
      // the viewport width — never hits the right edge.
      const startX = -CAR_W;
      const endX = window.innerWidth * TRAVEL_RATIO;
      const x = startX + (endX - startX) * eased;
      car.style.transform = `translate3d(${x}px, -50%, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-lg-6 mb-md-60">
          <div className="position-relative">
            <div className="position-relative overflow-hidden">
              <Image
                width={960}
                height={539}
                src="/assets/images/build.jpg"
                className="image-fullwidth relative"
                alt="Image Description"
              />
            </div>
            <div
              className="decoration-1 d-none d-sm-block"
              data-rellax-y=""
              data-rellax-speed={1}
              data-rellax-percentage="0.1"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <h4 className="h5">Our Mission</h4>
          <p className="text-gray">
            To provide comprehensive, high &ndash; quality real estate services
            that meet the diverse needs of our client. We strive to build
            lasting relationships and contribute to the growth and success of
            every client we serve.
          </p>
          <h4 className="h5">Our Vision</h4>
          <p className="text-gray">
            To be a trusted leader in the real estate industry, delivering
            exceptional services in property acquisition, management, sales,
            rentals, valuation and consulting. Our vision is to make real
            estate seamless, secure and rewarding for everyone we serve.
          </p>
        </div>
      </div>

      {/* Full-viewport car track. Sits beneath the row, breaks out of the
          parent container with a vw/-vw trick so the car traverses the full
          screen and is never clipped. */}
      <div
        ref={trackRef}
        aria-hidden="true"
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50vw)",
          width: "100vw",
          height: 110,
          marginTop: 40,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        <div
          ref={carRef}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            willChange: "transform",
          }}
        >
          <Image
            src="/assets/images/car.png"
            alt=""
            width={CAR_W}
            height={CAR_H}
            aria-hidden="true"
            priority={false}
          />
        </div>
      </div>
    </>
  );
}
