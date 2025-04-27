import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Header6 from "@/components/headers/Header6";
import { fancyMultipage } from "@/data/menu";
import React from "react";
import Contact from "@/components/homes/home-1/Contact";
import Gallery1 from "@/components/gallery/Gallery1";
import { menuItems } from "@/data/menu";
export const metadata = {
  title:
    "Listings | Honourable Odedo",
  description:
    "Honourable Odedo | Listings Page",
};
export default function MainAboutPage1({ onePage = false, dark = false }) {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <div className="light-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyMultipage} />
            </nav>{" "}
          </div>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
              className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/1-min.jpg)",
              }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 " />
              
                  <div className="container position-relative pt-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h2
                            className="section-caption-border mb-30 mb-xs-20  fadeInUp"
                            data-wow-duration="1.2s"
                          >
                           Listings
                          </h2>
                          <h1 className="hs-title-1 mb-40">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              Explore available Lands and properties for sale.{" "}
                            </span>
                          </h1>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </>
              </ParallaxContainer>
            </section>
            <>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <Gallery1 parantClass="col-md-4" />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0" />
              </>

              {/* End Divider */}
              {/* Call Action Section */}
             
            </>
             <section
                    className={`page-section  scrollSpysection  ${
                      dark ? "bg-dark-1 light-content" : ""
                    }`}
                    id="contact"
                  >
                    <Contact />{" "}
                  </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
