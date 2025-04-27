"use client";
import { photoItems } from "@/data/gallery";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const filters = [
  { category: "all", label: "All" },
  { category: "land", label: "Land" },
  { category: "apartments", label: "Apartments" },
  { category: "commercial", label: "Commercial" },
];

export default function Gallery1({
  itemsLength = 5,
  parantClass = "col-md-3",
}) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container relative">
      {/* Photo Grid */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => updateCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? "active" : ""
            }`}
          >
            {elm.name}
          </a>
        ))}
      </div>
      <Gallery>
        <div className="row mt-n30">
          {/* Photo Item */}
          {photoItems.slice(0, itemsLength).map((elm, i) => (
            <div key={i} className={parantClass}>
              <Item
                original={elm.src}
                thumbnail={elm.src}
                width={1350}
                height={865}
              >
                {({ ref, open }) => (
                  <div
                    className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                    data-wow-duration="1s"
                  >
                    <a className="lightbox-gallery-2 mfp-image">
                      <Image
                        ref={ref}
                        onClick={open}
                        src={elm.src}
                        width={719}
                        height={461}
                        alt="Image Description"
                      />
                    </a>
                  </div>
                )}
              </Item>
            </div>
          ))}
          {/* End Photo Item */}
        </div>
      </Gallery>
      {/* End Photo Grid */}
    </div>
  );
}
