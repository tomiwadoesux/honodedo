"use client";
import React, { useEffect, useState } from "react";
import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];

export default function Portfolio({ desc }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios2);
  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios2);
    } else {
      setFiltered(
        [...portfolios2].filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {/* Portfolio Item */}
        {filtered.map((item, index) => (
          <div
            key={index}
            className={`portfolio-2-item mb-100 mb-sm-50 mix ${item.categories.join(
              " "
            )}`}
          >
            <div className="row">
              {!(index % 2) ? (
                <>
                  <div className="col-md-8 mb-sm-30 order-md-first">
                    <div className="portfolio-2-image">
                      <Link href={`/bold-portfolio-single/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src="/assets/images/0cheers1.jpg"
                          alt="Image Description"
                        />
                      </Link>
                      
                    </div>
                    
                  </div>
                  <div className={`col-md-4  `}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/bold-portfolio-single/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
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
                    <div>
                
                    </div>
                  </div>{" "}
                </>
              ) : (
                <>
                  <div className={`col-md-4`}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/bold-portfolio-single/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
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
                  </div>{" "}
                  <div
                    className={`col-md-8 mb-sm-30 ${
                      index % 2 ? "order-first order-md-last" : ""
                    } `}
                  >
                    <div className="portfolio-2-image">
                      <Link href={`/bold-portfolio-single/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src="/assets/images/1cheers2.jpg"
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
