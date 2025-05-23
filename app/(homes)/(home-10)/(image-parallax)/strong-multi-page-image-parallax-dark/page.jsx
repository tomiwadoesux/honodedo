import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import Hero2 from "@/components/homes/home-10/heros/Hero2";
import { strongMultiPagesDark } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Home 10 Image Parallax MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home10ImageParallaxMultiPageDark() {
  return (
    <>
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header10 links={strongMultiPagesDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-strong/section-bg-3.jpg)",
                }}
                id="home"
              >
                <Hero2 />
              </ParallaxContainer>

              <Home10 dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer9 />
            </footer>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
