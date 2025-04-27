import Footer1 from "@/components/footers/Footer1";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Grid from "@/components/elements/Grid";
import { menuItems } from "@/data/menu";
import { fancyMultipage } from "@/data/menu";
import Header6 from "@/components/headers/Header6";

export const metadata = {
  title:
    "CEO | Honourable Odedo",
  description:
    "Honourable Odedo | CEO Page",
};
export default function Ceo() {
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
                className="page-section bg-gray-light-1 bg-dark-alpha parallax-5"
                style={{
                  backgroundImage: "url(/assets/images/hon.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <Grid />
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
