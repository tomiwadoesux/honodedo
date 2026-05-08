import Footer1 from "@/components/footers/Footer1";
import Team from "./Team";
import ModelViewer from "@/components/common/ModelViewer";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Honourable Odedo",
  description: "Honourable Odedo | About Us Page",
};

export default function AboutPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <main id="main">
          {/* HERO — vertical, centered:
              eyebrow → 3D bust → title → lede.
              Drag to rotate, no scroll-to-zoom. */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroStack}>
                <span className={styles.heroEyebrow}>About</span>

                <div className={styles.heroModel}>
                  <ModelViewer
                    src="/assets/models/profile-bust.glb"
                    autoRotate
                  />
                </div>

                <h1 className={styles.heroTitle}>
                  A real estate firm, rooted in Abuja.
                </h1>

                <p className={styles.heroLede}>
                  Built on a long career and a careful hand, we help
                  clients in Nigeria and the diaspora acquire, manage,
                  and build property in the FCT.
                </p>
              </div>
            </div>
          </section>

          {/* Team — CEO featured + the rest of the team */}
          <Team />
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
