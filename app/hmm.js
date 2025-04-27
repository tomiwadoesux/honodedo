

import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import Hero2 from "@/components/homes/home-1/heros/Hero2";
import { elegantMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Benefits from "@/components/homes/home-1/Benefits";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Service from "@/components/homes/home-1/Service";

export const metadata = {
  title:
    "Home 5 Main Demo MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home5MainDemoMultiPageDark() {
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header5 links={elegantMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section home-section bg-scroll bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
                style={{
                  backgroundImage: "url(/assets/images/church-building.jpg)",
                }}
                id="home"
              >
                <Hero2 />
              </ParallaxContainer>

              <Home5 light />

              <section>
                <Benefits />{" "}
              </section>
            </main>

            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
