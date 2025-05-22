"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    // Ensure code runs only on client-side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const image = imageRef.current;
      if (!image) return;

      // Get scroll position and viewport dimensions
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

      // Calculate horizontal translation
      // Move image from left to right (e.g., -100px to 100px) based on scroll
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const translateX = (scrollY / maxScroll) * (windowWidth - 100); // 300 is image width

      // Apply transform to move image horizontally
      image.style.transform = `translateX(${translateX}px)`;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/build.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          ></div>
          <div
            className="relative decoration-8 "
            style={{
            height: "150px", // Adjust to control when image is visible
            overflow: "hidden", // Prevent image from overflowing container
            }}
          >
            <div
              ref={imageRef}
              style={{
                position: "absolute",
                transform: "translateY(-50%)", // Center vertically
                willChange: "transform", // Optimize performance
              }}
            >
              <Image
                src="/assets/images/car.png"
                alt="Car illustration moving horizontally"
                width={300}
                height={74}
                aria-hidden="true"
              />
            </div>
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Our Mission</h4>
        <p className="text-gray">
          To provide comprehensive, high – quality real estate services that
          meet the diverse needs of our client. We strive to build lasting
          relationships and contribute to the growth and success of every client
          we serve.
        </p>
        <h4 className="h5">Our Vision</h4>
        <p className="text-gray">
          To be a trusted leader in the real estate industry, delivering
          exceptional services in property acquisition, management, sales,
          rentals, valuation and consulting. Our vision is to make real estate
          seamless, secure and rewarding for everyone we serve.
        </p>
      </div>
    </div>
  );
}
