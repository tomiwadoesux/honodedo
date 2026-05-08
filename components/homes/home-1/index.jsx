"use client";
import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Newsletter from "./Newsletter";
import Contact from "@/components/homes/home-1/Contact";
import Service2 from "@/components/homes/home-1/Service2";
import FilledArrowButton from "@/components/common/FilledArrowButton";
import UnderlineArrowButton from "@/components/common/UnderlineArrowButton";
import Link from "next/link";
import Image from "next/image";
import Accordion2 from "@/components/accordions/Accordion2";

export default function Home1({ onePage = false, dark = false }) {
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

              <UnderlineArrowButton href={onePage ? "#team" : `/about${dark ? "-dark" : ""}`}>
                Learn more about us
              </UnderlineArrowButton>
            </div>
          </div>
          <About />
        </div>
      </section>
      <section
        className="page-section bg-dark-1 bg-dark-alpha-50 light-content"
        style={{
          backgroundImage: "url(/assets/images/team3.jpg)",
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

          {/* What else do we offer */}
          <div style={{ marginTop: 96 }}>
            <header className="u-section-head">
              <div>
                <span className="t-eyebrow">More from us</span>
                <h2>
                  <AnimatedText text="What else do we offer our clients?" />
                </h2>
              </div>
            </header>
            <Accordion2 />
          </div>
        </div>{" "}
      </div>

      <section
        className={`page-section benefitsSectionExtraSpacing ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section>

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
                  {/* Legacy red for this CTA — restores the original
                      brand colour the section had before the FilledArrow
                      migration. */}
                  <FilledArrowButton
                    href={`/portfolio${dark ? "-dark" : ""}`}
                    size="lg"
                    color="var(--c-red)"
                  >
                    See Project
                  </FilledArrowButton>
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
