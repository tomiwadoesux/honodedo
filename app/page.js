import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Header6 from "@/components/headers/Header6";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import { fancyMultipage } from "@/data/menu";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
// import Hero2 from "@/components/homes/home-1/heros/Hero2";
import Hero5 from "./Hero5";
import ParallaxContainer from "@/components/common/ParallaxContainer";


import Image from "next/image";

export const metadata = {
  title:
    "Honourable Odedo & Co",
  description: 
    "Honourable Odedo & Co",

    
};
export default function Home1TypedTextMultiPage() {
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
            {/* <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/bg-shape-1.svg"
                  alt=""
                  className="opacity-05"
                />
              </div>
              <Hero2 />
            </section> */}
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5  scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/0-min.jpg)",
              }}
              id="home"
              
            >
              <Hero5 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
