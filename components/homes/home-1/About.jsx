"use client";
import Image from "next/image";

export default function About() {
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
          >
          
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
