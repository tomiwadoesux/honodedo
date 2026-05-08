import Footer1 from "@/components/footers/Footer1";
import { books } from "@/data/books";
import BookCard from "./BookCard";
import ModelViewer from "@/components/common/ModelViewer";
import styles from "./books.module.css";

export const metadata = {
  title: "Books | Honourable Odedo",
  description:
    "Books by Hon. Charles Odedo — on real estate, public service, and the long arc of building things that last.",
};

export default function BooksPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <main id="main">
          {/* Hero — eyebrow → 3D model → editorial sentence.
              Same composition as /about, so the two heroes feel paired. */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroInner}>
                <span className={styles.heroEyebrow}>The Library</span>

                <div className={styles.heroModel}>
                  {/* Different model from /about, and starts head-on
                      (azimuth 0°) — the rotation animation begins from
                      the model's normal front rather than from a
                      3/4 view. Same panel size + continuous spin. */}
                  <ModelViewer
                    src="/assets/models/books-feature.glb"
                    autoRotate
                    startAzimuth={0}
                  />
                </div>

                <p className={styles.heroLede}>
                  Five volumes by Hon. Charles Odedo on memoir, legal record,
                  and the long arc of real estate in Abuja.
                </p>
              </div>
            </div>
          </section>

          {/* Catalogue grid — each card hinges open a few degrees on
              hover/tap to reveal a printed title page behind the cover. */}
          <section className={styles.section}>
            <div className="container">
              <div className={styles.grid}>
                {books.map((b) => (
                  <BookCard key={b.id} book={b} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer1 />
      </div>
    </div>
  );
}
