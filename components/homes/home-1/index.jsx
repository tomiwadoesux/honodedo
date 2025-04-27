"use client";
import { useEffect } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Newsletter from "./Newsletter";
import Contact from "@/components/homes/home-1/Contact";
import Brands2 from "@/components/homes/home-1/Brands2";
import Testimonials2 from "@/components/homes/home-1/Teatimonials2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Facts from "@/components/homes/home-1/Facts";
import { teamMembers3 } from "@/data/team";
import PortfolioMassonry2 from "@/components/portfolio/PortfolioMassonry2";
import Team from "./Team";
import Service2 from "@/components/homes/home-1/Service2";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import Portfolio from "@/components/homes/home-2/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Accordion from "@/components/Accordion";
import Accordion2 from "@/components/accordions/Accordion2";
export default function Home1({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };
  }, []);

  return (
    <>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Story</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Expertise you can trust" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              ></div>
              {/* End Decorative Dots */}

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/about${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage: "url(/assets/images/team.jpg)",
        }}
      >
        <Newsletter />
      </section>
      <div className="page-section overflow-hidden pt-0 pb-0">
        <div className="marquee marquee-style-2 no-rotate">
          <div className="marquee-track marquee-animation-1">
            <div>Based in Abuja</div>
            <div>Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
            <div aria-hidden="true">Based in Abuja</div>
            <div aria-hidden="true">Since 2014</div>
          </div>
        </div>
      </div>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section> */}

      <ParallaxContainer></ParallaxContainer>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <div className="pt-4 container position-relative">
        <div className="row mb-60 mb-xs-30">
          <div className="col-md-6" id="services" >
            <h2 className="section-caption mb-xs-10">Our Services</h2>
            <h3 className="section-title mb-0">
              <AnimatedText text="What we offer our clients" />
            </h3>
          </div>
          <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
            {/* Decorative Dots */}
            <div
              className="decoration-2 d-none d-md-block"
              data-rellax-y=""
              data-rellax-speed="0.7"
              data-rellax-percentage="-0.2"
            ></div>
            {/* End Decorative Dots */}
          </div>
        </div>
        <div
          className={`page-section  scrollSpysection  ${
            dark ? "bg-dark-1 light-content" : ""
          }`}
        >
          <Service2 />
          <div className="row pt-4 mb-60 mb-xs-30">
            <div className="col-md-6">
              <h3 className="section-title mb-0">
                <AnimatedText text="What else do we offer our clients?" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              ></div>
              {/* End Decorative Dots */}
            </div>
            <Accordion2 />
          </div>
        </div>{" "}
      </div>

      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section>
      {/* 
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row mb-100 mb-md-80 mb-sm-40">
            <div className="col-md-8 col-lg-9 mb-sm-30">
              <p className="section-descr-large mb-0 wow fadeInUp">
                Our partners
              </p>
            </div>
            <div className="col-md-4 col-lg-3 text-end pt-20 pt-md-10 pt-sm-0 local-scroll">

            </div>
          </div>

          <Portfolio />


        </div>
      </section> */}

      {/* <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section> */}

      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>
      {/* <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className="page-section bg-gray-light-1 bg-light-alpha-70 bg-scroll pb-0 mb-100 mb-md-70 mb-sm-50 z-index-1"
        style={{
          backgroundImage: "url(/assets/images/ptt.png)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h3 className="section-title mb-60 mb-sm-50">
                <div>
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText text=" Liberation Housing Estate  " />
                    <br />
                    <AnimatedText text="  Awka Capital Territory" />
                  </span>
                </div>

                <div className="local-scroll">
                  <Link
                    href={`/portfolio${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>See Project</span>
                  </Link>
                </div>
              </h3>

              <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
                <Image
                  src="/assets/images/anb2.jpg"
                  className="wow scaleOutIn"
                  width={1200}
                  height={675}
                  data-wow-offset={0}
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
