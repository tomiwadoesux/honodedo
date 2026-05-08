import Footer1 from "@/components/footers/Footer1";
import Contact from "@/components/homes/home-1/Contact";
import Gallery1 from "@/components/gallery/Gallery1";
import ModelViewer from "@/components/common/ModelViewer";
import styles from "./listings.module.css";

export const metadata = {
  title: "Listings | Honourable Odedo",
  description: "Honourable Odedo | Listings Page",
};

export default function ListingsPage({ dark = false }) {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <main id="main">
          {/* Hero — paired composition with /about, /books, /portfolio.
              eyebrow → 3D model → title → lede. */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroStack}>
                <span className={styles.heroEyebrow}>Listings</span>

                <div className={styles.heroModel}>
                  <ModelViewer
                    src="/assets/models/profile-bust.glb"
                    autoRotate
                  />
                </div>

                <h1 className={styles.heroTitle}>
                  Land and property, ready to acquire.
                </h1>

                <p className={styles.heroLede}>
                  A small selection of vetted, titled listings across Abuja and
                  the FCT. Browse the current shelf, then send a note when one
                  catches your eye.
                </p>
              </div>
            </div>
          </section>

          {/* Existing photo grid */}
          <section className="page-section pt-0">
            <Gallery1 parantClass="col-md-4" />
          </section>
          <hr className="mt-0 mb-0" />

          {/* Contact form */}
          <section
            className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""}`}
            id="contact"
          >
            <Contact />
          </section>
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
