import Footer1 from "@/components/footers/Footer1";
import Contact from "@/components/homes/home-1/Contact";
import PosterModal from "./PosterModal";
import styles from "./ceo.module.css";

export const metadata = {
  title: "The CEO | Honourable Odedo",
  description:
    "A long-form profile of Honourable Odedo — UNN, FCDA, Portland, Abuja, two terms in the National Assembly, and the long return to real estate.",
};

export default function CeoPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">

        <main id="main">
          {/* HERO */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroInner}>
                <div>
                  <span className={styles.heroEyebrow}>Profile · The CEO</span>
                  <h1 className={styles.heroName}>
                    Honourable
                    <br />
                    <span className={styles.heroSerif}>Odedo</span>
                  </h1>
                </div>
                <div className={styles.heroPortraitWrap}>
                  <img
                    src="/assets/images/hon.jpg"
                    alt="Honourable Odedo"
                    className={styles.heroPortrait}
                  />
                </div>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <strong>Estate Mgmt</strong> UNN, 1980
                </span>
                <span>
                  <strong>FCDA</strong> 1981 &mdash; 1989
                </span>
                <span>
                  <strong>House of Reps</strong> 2007 &amp; 2011
                </span>
                <span>
                  <strong>NIESV Fellow</strong> 2014
                </span>
              </div>
            </div>
          </section>

          {/* THE ARTICLE — long form, faithful to the original text */}
          <article className={styles.article}>
            <div className={styles.articleInner}>
              {/* PROLOGUE — formal, third-person profile sitting before
                  the autobiographical chapters. Verbatim, intentionally
                  not summarised. */}
              <section className={styles.prologue}>
                <span className={styles.prologueEyebrow}>Profile</span>
                <div className={styles.prose}>
                  <p>
                    <strong>
                      Hon. Charles Chinwendu Odedo, B.Sc., FNIVS, JP
                    </strong>{" "}
                    is a seasoned real estate professional, business
                    executive, and former legislator with decades of experience
                    in land, housing, and property development. He holds a
                    B.Sc. in Estate Management from the University of Nigeria,
                    Nsukka, and completed a Post-Baccalaureate Programme in
                    Marketing at Portland State University, Oregon, USA.
                  </p>
                  <p>
                    He is the CEO of Honourable Odedo &amp; Co., Expert Edge
                    Estate Limited, and Cheers Hotels Ltd., Abuja. A Fellow of
                    the Nigerian Institution of Estate Surveyors &amp; Valuers
                    (FNIVS), he is also a member of the Real Estate Developers
                    Association of Nigeria (REDAN) and the Abuja Chamber of
                    Commerce and Industry (ACCI).
                  </p>
                  <p>
                    Hon. Odedo served as a Member of the House of
                    Representatives (2007&ndash;2015) and chaired the House
                    Sub-Committee on Mass Housing. He has held several
                    leadership roles in public service and professional
                    associations and is the author of five books, including
                    works on politics and real estate investment.
                  </p>
                  <p>
                    He is widely recognized for his expertise in land
                    administration, housing policy, and real estate
                    development. He is married with five children.
                  </p>
                </div>
              </section>

              {/* CHAPTER I */}
              <section className={styles.chapter}>
                <header className={styles.chapterMeta}>
                  <span className={styles.chapterNumber}>I</span>
                  <span className={styles.chapterRule} />
                </header>
                <h2 className={styles.chapterTitle}>
                  The beginning, <em>and a little luck</em>
                </h2>

                <div className={styles.prose}>
                  <p className={styles.firstParagraph}>
                    I went through primary and secondary school in my local
                    government public school. I attended UNN, where I studied
                    Estate Management and graduated in 1980. I completed my
                    NYSC in 1981 and joined the FCDA in August that same year,
                    just two months later. I became an Associate of the
                    Nigerian Institution of Estate Surveyors and Valuers
                    (NIESV) in 1986. I left FCDA as a Senior Estate Surveyor in
                    1989 and traveled to the USA for a two-year
                    post-baccalaureate program in Marketing at Portland State
                    University, Oregon, from 1989 to 1991.
                  </p>
                  <p>
                    I studied Estate Management by chance. My immediate elder
                    brother was a student of Architecture in the Faculty of
                    Environmental Studies at UNN Enugu Campus. He had his best
                    friend, ESV Romanus Okoli, studying Estate Management in
                    the same faculty. It was through my brother&rsquo;s friend
                    I came to know about Estate Management. I was extremely
                    interested in it, so I took the course, and the rest is
                    history.
                  </p>
                  <p>
                    I was a very smart student, consistently taking 1st to 3rd
                    positions throughout my primary and secondary school
                    years, even while being actively involved in sports
                    &mdash; especially short-distance races (100m and 200m)
                    and football. Balancing academics and athletics took
                    perseverance and discipline, but I remained committed to
                    both. I was awarded a Certificate of Excellence in Sports
                    by the Vice Chancellor and graduated with a Second Class
                    Lower degree.
                  </p>
                  <p>
                    The Head of State General Murtala Mohammed had declared
                    Abuja the nation&rsquo;s capital in 1976, and my actual
                    work started two years later. By the time I joined FCDA in
                    1981, Abuja was still very young. I worked with FCDA for 7
                    years and then left in 1989 for Portland Oregon, USA.
                  </p>
                </div>
              </section>

              {/* PULL QUOTE */}
              <aside className={styles.pullQuote}>
                <p className={styles.pullQuoteText}>
                  By the time I joined FCDA in 1981, Abuja was still very
                  young.
                </p>
                <span className={styles.pullQuoteCite}>1981 &mdash; FCDA</span>
              </aside>

              {/* CHAPTER II */}
              <section className={styles.chapter}>
                <header className={styles.chapterMeta}>
                  <span className={styles.chapterNumber}>II</span>
                  <span className={styles.chapterRule} />
                </header>
                <h2 className={styles.chapterTitle}>
                  The American years, <em>and a quiet vow</em>
                </h2>

                <div className={styles.prose}>
                  <p>
                    My life actually changed for good while living in the USA.
                    First, I got more education in business and, more
                    importantly, in Marketing and Sales. I also did a lot of
                    self-motivational courses in psychology and sales. My
                    confidence grew while in the USA. I worked for UPS (United
                    Parcel Service), one of the world&rsquo;s leading parcel
                    companies. It was a baptism of fire &mdash; the most
                    tedious job you can imagine. As a student at Portland
                    State University, UPS regularly recruited from our campus,
                    and this worked in my favour. The attraction for me was
                    the late night shift, which enabled me to prioritize my
                    studies while juggling other responsibilities. Equally
                    pleasing, their pay per hour was more than double the
                    minimum wage.
                  </p>
                  <p>
                    Unfortunately, the work at UPS was so tedious that, most
                    times after covering long night shifts, I would not have
                    the energy to go to school because I would sleep all day.
                    I vowed while working for UPS that I would work for myself
                    and own my own business. I made a personal vow that if I
                    could put half the energy into my own business, I would
                    surely succeed. That inherent drive in me led to
                    brainstorming about business ideas. I started a one-man
                    carpet cleaning business, then a pest control company,
                    between 1992 and 1999.
                  </p>
                </div>
              </section>

              {/* CHAPTER III */}
              <section className={styles.chapter}>
                <header className={styles.chapterMeta}>
                  <span className={styles.chapterNumber}>III</span>
                  <span className={styles.chapterRule} />
                </header>
                <h2 className={styles.chapterTitle}>
                  Back to Abuja
                </h2>

                <div className={styles.prose}>
                  <p>
                    After the 1999 elections, I returned to Abuja, restarted
                    my estate practice, and established Cheers Hotel Ltd. I
                    was doing well in both my practice and the hotel business
                    and was extending significant empowerment to my people in
                    my village. My people then invited me to join politics
                    because they figured out my generosity could carry me
                    through &mdash; and it did.
                  </p>
                </div>
              </section>

              {/* CHAPTER IV */}
              <section className={styles.chapter}>
                <header className={styles.chapterMeta}>
                  <span className={styles.chapterNumber}>IV</span>
                  <span className={styles.chapterRule} />
                </header>
                <h2 className={styles.chapterTitle}>
                  Politics, <em>and what came after</em>
                </h2>

                <div className={styles.prose}>
                  <p>
                    I joined politics in 2005, contested for the House of
                    Representatives in 2007 and won. I re-contested in 2011
                    and succeeded. I tried again in 2015 and lost. I tried
                    again in 2019 and was unsuccessful. I went back to my
                    business and practice in 2020, and it has remained so to
                    date.
                  </p>
                  <p>
                    I began my political journey in 2005 when I joined PDP. I
                    contested and won my first election to the House of
                    Representatives in 2007, having been in politics for less
                    than two years. Again, I was re-elected in 2011 under
                    ACN/APC. To date, I remain the very first &mdash; and
                    still the only &mdash; person from Anambra State to be
                    elected to the House of Representatives under the ACN/APC
                    party. While in the House, I was elevated to a Fellow at
                    NIESV in 2014, in recognition of my professional
                    accomplishments and contributions to the field.
                  </p>
                  <p>
                    I restarted my practice in 2020 and also gave full
                    attention to my hotel business. I have been fairly
                    successful. As I reflect on my life&rsquo;s journey
                    &mdash; shaped by local and international education,
                    extensive self-development, a broad range of professional
                    experiences both at home and abroad, as well as my
                    involvement in politics and philanthropy &mdash; I am
                    driven by a vision to use my skills to give back to
                    society in a meaningful and impactful way, while also
                    building sustainable success. This is the foundation and
                    mission of HonourableOdedo.com.
                  </p>
                </div>
              </section>

              {/* CHAPTER V */}
              <section className={styles.chapter}>
                <header className={styles.chapterMeta}>
                  <span className={styles.chapterNumber}>V</span>
                  <span className={styles.chapterRule} />
                </header>
                <h2 className={styles.chapterTitle}>
                  The work, <em>today</em>
                </h2>

                <div className={styles.prose}>
                  <p>
                    My current focus is on helping individuals acquire or sell
                    land and property in Abuja, FCT. We&rsquo;ve developed a
                    special initiative tailored for the diaspora community
                    &mdash; <em>Diasporas: Own a Piece of Abuja.</em> This
                    program provides access to estate land or property with a
                    clear pathway to obtaining a Certificate of Occupancy (C
                    of O).
                  </p>
                  <p>
                    Despite the challenges many Nigerians face abroad, the
                    current exchange rate presents a unique advantage. With
                    approximately $3,000 USD, you can begin your journey to
                    owning land in Abuja. To get started, I invite you to
                    visit Abuja, stay at my hotel, enjoy a guided tour of the
                    city, and explore available properties firsthand before
                    making your investment.
                  </p>
                </div>
              </section>
            </div>
          </article>

          {/* PROFILE AT A GLANCE — single click-to-enlarge poster.
              Click opens a PhotoSwipe modal showing the full poster. */}
          <section className={styles.summary}>
            <div className="container">
              <div className={styles.summaryInner}>
                <header className={styles.summaryHead}>
                  <h2 className={styles.summaryTitle}>Profile at a glance</h2>
                </header>
                <PosterModal
                  src="/assets/images/about/profile-summary.webp"
                  alt="Profile summary of Hon. Charles Chinwendu Odedo — career, education, and public service on one sheet"
                  caption="Hon. Charles Chinwendu Odedo"
                />
              </div>
            </div>
          </section>

          {/* CONTACT — site-wide contact form (same one used on /listings). */}
          <section className={styles.contactSection} id="contact">
            <Contact />
          </section>
        </main>

        <Footer1 />
      </div>
    </div>
  );
}
