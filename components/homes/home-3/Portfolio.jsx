import { portfolios3 } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <div>
      {/* Portfolio Item */}
      {portfolios3.map((elm, i) => (
        <React.Fragment key={i}>
          {!(i % 2) ? (
            <div
              className="portfolio-1-item row mb-80 mb-sm-50 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-md-5 mb-sm-30">
                <div className="portfolio-1-image">
                  <Link href={`/brutalist-portfolio-single/${elm.id}`}>
                    <Image
                      src="/assets/images/1cheers2.jpg"
                      loading="lazy"
                      width={elm.imgWidth}
                      height={elm.imgHeight}
                      alt="Image Description"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div>
                  <h3 className="portfolio-1-title font-alt mb-20">
                    <Link href={`/brutalist-portfolio-single/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <div className="ps-md-2 ps-lg-4">
                    <div className="row">
                      <div className="col-md-10 col-lg-8 col-xl-7">
                        <p className="portfolio-1-descr">{elm.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch"></div>

                  <div className="col-sm-6 d-flex align-items-stretch">
                    <div
                      className="alt-features-item border-left mt-0 wow fadeScaleIn"
                      data-wow-delay=".5s"
                    >
                      <h4 className="alt-features-title">Location</h4>
                      <div className="alt-features-descr">
                        20 Benue Crescent, Behind Area 1 shopping complex Garki
                      </div>
                      <h4 className="alt-features-title"></h4>
                    </div>
                  </div>
                  <div className=" col-sm-6 d-flex align-items-stretch">
                    <div
                      className="alt-features-item border-left mt-0 wow fadeScaleIn"
                      data-wow-delay=".5s"
                    >
                      <h4 className="alt-features-title">Contact</h4>
                      <div className="alt-features-descr">
                        20 Benue Crescent, Behind Area 1 shopping complex Garki
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="portfolio-1-item row mb-80 mb-sm-50 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h3 className="portfolio-1-title font-alt mb-20 ms-0">
                    <Link href={`/brutalist-portfolio-single/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <div className="row">
                    <div className="col-md-11 col-lg-9 col-xl-8">
                      <p className="portfolio-1-descr">{elm.description}</p>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex align-items-stretch">
                    <div
                      className="alt-features-item border-left mt-0 wow fadeScaleIn"
                      data-wow-delay=".5s"
                    >
                      <h4 className="alt-features-title">Location</h4>
                      <div className="alt-features-descr">
                        20 Benue Crescent, Behind Area 1 shopping complex Garki
                      </div>
                      <h4 className="alt-features-title"></h4>
                    </div>
                  </div>
                  <div className=" col-sm-6 d-flex align-items-stretch">
                    <div
                      className="alt-features-item border-left mt-0 wow fadeScaleIn"
                      data-wow-delay=".5s"
                    >
                      <h4 className="alt-features-title">Contact</h4>
                      <div className="alt-features-descr">
                        20 Benue Crescent, Behind Area 1 shopping complex Garki
                      </div>
                    </div>
                  </div>

                 
                </div>
              </div>
              <div className="col-md-6 order-first order-md-last mb-sm-30">
                <div className="portfolio-1-image">
                  <Link href={`/brutalist-portfolio-single/${elm.id}`}>
                    <Image
                      src="/assets/images/0cheers1.jpg"
                      loading="lazy"
                      width={elm.imgWidth}
                      height={elm.imgHeight}
                      alt="Image Description"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {/* End Portfolio Item */}
      {/* Portfolio Item */}

      {/* End Portfolio Item */}
    </div>
  );
}
