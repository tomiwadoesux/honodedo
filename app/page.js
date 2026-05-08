import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import Hero5 from "./Hero5";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Honourable Odedo & Co",
  description: "Honourable Odedo & Co",
};

export default function HomePage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <main id="main">
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
