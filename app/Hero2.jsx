"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import TypeWriter from "@/components/common/TypeWriter";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Image from "next/image";

export default function Hero2() {
  return (
    <>
      <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className=" mb-30 mb-xs-20 main-sub gap-4 ">
                <Image
                  src="/assets/images/logo-w.svg"
                  alt="Your Company Logo"
                  width={60}
                  height={60}
                  className=" self-center light-mode-logo"
                />
                <div>
                  <h2 className="section-caption-fancy  fadeInUp">
                    Honourable Odedo & Co
                  </h2>
                </div>
                <Image
                  src="/assets/images/niesv-w.svg"
                  alt="Your Company Logo"
                  width={60}
                  height={60}
                  className=" self-center light-mode-logo"
                />
              </div>

              <h1 className="hs-title-8 mb-40 mb-sm-20  fadeInUp">
                We will help you
                <span className=" text-[#ED3237] visually-hidden">
                  Buy, Sell
                </span>
                <TypeWriter
                  style={{ color: "#ED3237" }}
                  strings={["Buy", "Sell"]}
                />
                <span>Land Or Properties in Abuja</span>
              </h1>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p
                    className="section-descr white mb-40 dfd text-[#ED3237] fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    We offer all of our services for people who reside in and
                    outside Nigeria
                  </p>
                </div>
              </div>
              <div
                className="local-scroll fadeInUp wch-unset"
                data-wow-delay="0.6s"
              >
                <a
                  href="#services"
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim mx-1 mb-xs-10"
                >
                  <span>Our Services</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(true)}
                  className="btn btn-mod btn-w-c btn-large btn-round mx-1 mb-xs-10 lightbox mfp-iframe"
                  data-btn-animate="y"
                >
                  <i className=" size-13 me-1" /> Contact Us
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-4  fadeInUp"
          data-wow-offset={0}
        >
          <div className="full-wrapper text-center">
            <a href="#about" className="scroll-down-4">
              <i className="mi-arrow-down size-24" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>{" "}
    </>
  );
}
