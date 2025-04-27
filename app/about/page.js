import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Features from "@/components/homes/home-1/Features";
import { teamMembers } from "@/data/team";
import Split from "@/components/homes/home-1/Split";
import Image from "next/image";
import { featuresListData } from "@/data/features";
import { progressData } from "@/data/skills";
import Header6 from "@/components/headers/Header6";
import { fancyMultipage } from "@/data/menu";
import Link from "next/link";
import Portfolio from "./Portfolio";

import { menuItems } from "@/data/menu";

export const metadata = {
  title: "About | Honourable Odedo",
  description: "Honourable Odedo | About Us Page",
};
export default function MainAboutPage3() {
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
                  backgroundImage: "url(/assets/images/team2.jpg)",
                }}
              >
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
                          About Us
                        </h2>
                        <h1 className="hs-title-1 mb-40">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            We love a little back Story
                          </span>
                        </h1>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          src="/assets/images/hon2.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                      <div
                        className="call-action-4-image-2"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.25"
                      >
                        <Image
                          src="/assets/images/hon.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="from-left">
                      <h2 className="section-title mt-30">About The CEO</h2>
                      <p className="mb-50">
                        Honorable Odedo is a real estate expert, entrepreneur,
                        and former House of Representatives member. A graduate
                        of Estate Management from UNN and Marketing from
                        Portland State University, USA, he has successfully
                        built businesses both in Nigeria and abroad. After
                        serving two terms in the National Assembly, He is now
                        dedicated to creating opportunities for Nigerians at
                        home and abroad to secure valuable land and real estate
                        in Abuja, combining decades of experience with a passion
                        for empowerment.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/ceo${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>See More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className=" flex flex-col page-section">
              <div className="row">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                  <h3 className="section-title ">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      The Summary of the CEO
                    </span>
                  </h3>
                </div>
              </div>
              <Portfolio gridClass="work-grid-2" />
            </section>

            <>
              {/* End Team Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
            </>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content z-index-1" : ""
              }`}
            ></section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
