import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";

import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section className="page-section" id="Project">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp" data-wow-offset={0}>
              <div className="block-sticky">
                <h2 className="h3 mb-20">Hutu Estate</h2>
                <hr className="mb-20" />

                <div className="row small">
                  <div className="col-sm-4">
                    <b>Location:</b>
                  </div>
                  <div className="col-sm-8">
                    Hutu Abuja, Airport Road, Before Centenary City, Abuja.
                  </div>
                </div>
                <hr className="mb-20" />
                <div className="small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Hutu Abuja is a breathtaking development that redefines
                    luxury living, leisure, and tourism in Africa. Spanning 500
                    hectares along the prestigious Airport Road, Abuja, this $3
                    billion venture promises an extraordinary lifestyle
                    unmatched anywhere on the continent.
                  </div>
                </div>
                <hr className="mb-20" />
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                  <Image
                    src="/assets/images/hutu1.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/hutu2.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/hutu3.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/hutu4.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/hutu5.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}

                {/* End Photo Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="Project">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp" data-wow-offset={0}>
              <div className="block-sticky">
                <h2 className="h3 mb-20">Cheers Hotels</h2>
                <hr className="mb-20" />

                <div className="row small">
                  <div className="col-sm-4">
                    <b>Location:</b>
                  </div>
                  <div className="col-sm-8">
                    20 Benue Crescent, Behind Area 1 shopping complex Garki,
                    Abuja
                  </div>
                </div>
                <hr className="mb-20" />
                <div className="small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Owned by the CEO, Cheers Hotels offers a welcoming
                    environment with top-notch customer service, ensuring guests
                    feel at home throughout their stay. The hotel features
                    professional catering services, a clean and well-maintained
                    atmosphere, and reliable 24/7 electricity, making it a
                    comfortable and convenient choice for all travelers.
                  </div>
                </div>
                <hr className="mb-20" />
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                  <Image
                    src="/assets/images/0cheers1.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/0cheers2.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/0cheers3.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}

                {/* End Photo Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="Project">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp" data-wow-offset={0}>
              <div className="block-sticky">
                <h2 className="h3 mb-20">Cheers Hotels</h2>
                <hr className="mb-20" />

                <div className="row small">
                  <div className="col-sm-4">
                    <b>Location:</b>
                  </div>
                  <div className="col-sm-8">
                    16, Mekong Crescent, Maitama, Abuja
                  </div>
                </div>
                <hr className="mb-20" />
                <div className="small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Owned by the CEO, Cheers Hotels offers a welcoming environment with top-notch
                    customer service, ensuring guests feel at home throughout
                    their stay. The hotel features professional catering
                    services, a clean and well-maintained atmosphere, and
                    reliable 24/7 electricity, making it a comfortable and
                    convenient choice for all travelers.
                  </div>
                </div>
                <hr className="mb-20" />
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                  <Image
                    src="/assets/images/1cheers1.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/1cheers2.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/1cheers3.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}

                {/* End Photo Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="Project">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp" data-wow-offset={0}>
              <div className="block-sticky">
                <h2 className="h3 mb-20">Residential Building</h2>
                <hr className="mb-20" />

                <div className="row small">
                  <div className="col-sm-4">
                    <b>Location:</b>
                  </div>
                  <div className="col-sm-8">
                    SunCity Estate, Abuja
                  </div>
                </div>
                <hr className="mb-20" />
                {/* <div className="small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet conseur adipisci inerene.
                    Maecenas volutpat, diam eni sagittis quam porta quam. Sed id
                    dolor consectetur fermentum volutpat accumsan purus iaculis
                    libero.
                  </div>
                </div>
                <hr className="mb-20" /> */}
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                  <Image
                    src="/assets/images/home1.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/home2.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}

                {/* End Photo Item */}
                {/* Photo Item */}

                {/* End Photo Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="Project">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp" data-wow-offset={0}>
              <div className="block-sticky">
                <h2 className="h3 mb-20">Proposed Residential Development</h2>
                <hr className="mb-20" />

                <div className="row small">
                  <div className="col-sm-4">
                    <b>Location:</b>
                  </div>
                  <div className="col-sm-8">
                    Plot 259 & 259A, Liberation Housing Estate, Awka Capital
                    Territory Candale Nigeria limited.
                  </div>
                </div>
                <hr className="mb-20" />
                {/* <div className="small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet conseur adipisci inerene.
                    Maecenas volutpat, diam eni sagittis quam porta quam. Sed id
                    dolor consectetur fermentum volutpat accumsan purus iaculis
                    libero.
                  </div>
                </div> */}
                {/* <hr className="mb-20" /> */}
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                  <Image
                    src="/assets/images/0-min.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/1-min.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/3-min.png"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
                {/* Photo Item */}
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/2-min.jpg"
                    alt="Image Description"
                    width={1200}
                    height={819}
                  />
                </div>
                {/* End Photo Item */}
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
