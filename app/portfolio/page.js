import Footer1 from "@/components/footers/Footer1";
import Home1 from "./home1";
import ModelViewer from "@/components/common/ModelViewer";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Portfolio | Honourable Odedo",
  description: "Honourable Odedo | Portfolio Page",
};

export default function PortfolioPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <main id="main">
          {/* Hero — same vertical centered composition as /about and
              /books, so the three editorial pages read as a family.
              eyebrow → 3D model → title → lede. */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroStack}>
                <span className={styles.heroEyebrow}>Our Portfolio</span>

                <div className={styles.heroModel}>
                  {/* `cameraHeight={1.2}` raises the camera above the
                      model's centroid → the viewer looks down at it
                      from a slight elevation (architectural plan-view
                      feel). `boundsMargin={0.85}` lets the model fill
                      ~15% past the panel edges, reading as bigger
                      and more present than the /about / /books models. */}
                  <ModelViewer
                    src="/assets/models/portfolio-feature.glb"
                    autoRotate
                    cameraHeight={1.2}
                    boundsMargin={0.85}
                  />
                </div>

                <h1 className={styles.heroTitle}>
                  A look at the work.
                </h1>

                <p className={styles.heroLede}>
                  A small selection of estates, buildings, and land
                  acquisitions delivered with our clients across the FCT.
                </p>
              </div>
            </div>
          </section>

          {/* Existing portfolio grid */}
          <Home1 />
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
