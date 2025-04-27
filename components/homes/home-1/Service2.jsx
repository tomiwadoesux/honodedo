import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service2() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <ul className="nav nav-tabs  services-tabs" role="tablist">
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Acquisition <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                q
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Sale <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Agency <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Consultancy <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Letting <span className="number">05</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-6"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Management <span className="number">06</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="text-white services-title">Acquisition</h4>
                  <p className="text-white mb-0">
                    At Honourable Odedo & Co, we offer comprehensive property
                    acquisition services, helping clients identify, evaluate and
                    secure high – potential real estate assets that align with
                    their investment or development goals. From legal compliance
                    to seamless transaction process, we handle every step to
                    ensure successful property procurement.
                  </p>
                </div>
              </div>
              <div className="h-[945px] w-auto">
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/acquisition.jpg"
                alt="Image Description"
              />
              </div>
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="text-white services-title"> Sale</h4>
                  <p className="text-white mb-0">
                    At Honourable Odedo & Co, we help clients sell or let their
                    property or land quickly at the best value. Our team handles
                    listings, marketing, viewings and negotiations; we connect
                    you with serious buyers or sellers, tenants and manage the
                    process from start to finish. With us your gets the
                    attention it deserves.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/sale.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="  text-white services-title"> Agency</h4>
                  <p className="text-white mb-0">
                    At Honourable Odedo & Co, we offer professional agency
                    services for property sales, rentals and purchases. Whether
                    you’re a buyer, seller, landlord or tenant, we represent
                    your interests every step of the way. Our team handles
                    marketing, property viewings, negotiations and legal paper
                    work. With a very strong network and local market knowledge,
                    we connect you with the right people and best deals. We
                    ensure a smooth, transparent and successful transaction from
                    start to finish.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/agency.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className=" services-text-container">
                  <h4 className="text-white services-title">
                    {" "}
                    <h4>Consultancy</h4>{" "}
                  </h4>
                  <p className="text-white mb-0">
                    We offer consulting to guide your real estate decisions with
                    confidence. Our team provides insight on market trend, good
                    ROI strategies and property development. We help you make
                    informed choices that maximize value and reduce risk.
                    Whether you’re buying, selling or developing, our advice
                    keeps you ahead.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/consult.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="text-white services-title">Letting</h4>
                  <p className="text-white mb-0">
                    At Honourable Odedo & Co, we help clients to let their
                    property quickly at the best value. Our team handles
                    listings, marketing, viewings and negotiations; we connect
                    you with tenants and we manage the
                    process from start to finish. 
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/sale.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="text-white services-title">Managememnt</h4>
                  <p className="text-white mb-0">
                    Here at Honourable Odedo & Co, we manage residential,
                    commercial and rental properties with care and
                    professionalism. Our services include tenant screening, rent
                    collection, maintenance and repairs. We ensure your property
                    is well maintained and compliant with all regulations.
                    properties are well-maintained and legally compliant.
                  </p>
                </div>
              </div>
              <div className="w-100 h-100">
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/mgmt.jpg"
                alt="Image Description"
              />
              </div>
              
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
