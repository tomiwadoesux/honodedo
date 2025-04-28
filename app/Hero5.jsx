"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriter from "@/components/common/TypeWriter";
import Image from "next/image";

const divSections = [
  {
    className: "home-section bg-scroll bg-dark-alpha-60",
    bgImage: "/assets/images/team.jpg",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
  {
    className: "home-section bg-scroll bg-dark-alpha-50",
    darkclassName: "home-section bg-scroll bg-dark-alpha-50",
    bgImage: "/assets/images/0-min.jpg",
  },
  {
    className: "home-section bg-scroll bg-dark-alpha-50",
    bgImage: "/assets/images/0cheers1.jpg",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
];
export default function Hero5({ dark }) {
  return (
    <>
      <div className="fullwidth-gallery-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay
          effect="fade"
          watchSlidesProgress
          resizeObserver
          className="fullwidth-gallery owl-carousel owl-theme  overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {divSections.map((elm, index) => (
            <SwiperSlide className="owl-item" key={index}>
              <div
                className={dark ? elm.darkclassName : elm.className}
                style={{
                  backgroundImage: `url(${elm.bgImage})`,
                }}
              />
            </SwiperSlide>
          ))}

          {/* End Team item */}
        </Swiper>
      </div>
      {/* End Fullwidth Slider */}
      <div className="fullwidth-galley-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
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
                                Honourable <span className="text-nowrap"> Odedo & Co</span>
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
            className="local-scroll scroll-down-wrap-4 wow fadeInUp"
            data-wow-offset={0}
          >
            <div className="full-wrapper text-end">
              <a href="#about" className="scroll-down-4">
                <i className="mi-arrow-down size-24" />
              </a>
            </div>
          </div>
          {/* End Scroll Down */}
          {/* Status */}
          <div className="hs-status wow fadeInUp" data-wow-offset={0}>
            Based in London, United Kingdom
          </div>
          {/* End Status */}
        </div>
      </div>
    </>
  );
}
