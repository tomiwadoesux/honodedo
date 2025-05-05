"use client";
import { useEffect } from "react";
import tippy from "tippy.js";

export default function Grid() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  return (
    <div className="container relative">
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5>My Personal Story</h5>
          <p className="text-gray text-justify mb-0">
            I went through primary and secondary school in my local government
            public school. I attended UNN, where I studied Estate Management and
            graduated in 1980. I completed my NYSC in 1981 and joined the FCDA
            in August that same year, just two months later. I became an
            Associate of the Nigerian Institution of Estate Surveyors and
            Valuers (NIESV) in 1986. I left FCDA as a Senior Estate Surveyor in
            1989 and traveled to the USA for a two-year post-baccalaureate program
            in Marketing at Portland State University, Oregon, from 1989 to
            1991. While in the United States, I started and ran two businesses—a
            carpet cleaning company followed by a pest control company—between
            1992 and 1999. After the 1999 elections, I returned to Abuja,
            restarted my estate practice, and established Cheers Hotel Ltd.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5> My Personal Story</h5>
          <p className="text-gray mb-0">
            I joined Politics in 2005, contested for House of Reps in 2007 and
            won. I re-contested in 2011 and succeeded. I tried again in 2015 and
            lost. Then, again in 2019 but was unsuccessful. I went back to my
            business and practice in 2020, and it has remained so to date. My
            business nature started while attending Portland State University,
            Portland Oregon USA 1989-1991. There, I ran my own business in the
            USA---first, a carpet cleaning company followed by a pest control
            company. This was between 1992-1999. Eventually, I came back to
            Abuja just after the 1999 election, restarted my estate practice,
            and founded Cheers Hotel Ltd.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <hr className="mb-40" />
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>Studied Estate Management by chance. </h5>
          <p className="text-gray mb-0">
            Studied Estate Management by chance. My immediate elder brother was
            a student of Architecture Faculty of Environmental Studies at UNN
            Enugu Campus. He had his best friend ESV Romanus Okoli studying
            Estate Management in the same faculty. It was through my brother's
            friend I came to know about Estate Management. I was extremely
            interested in Estate Management, so I took the course, and the rest
            is History.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>Activities</h5>
          <p className="text-gray mb-0">
            I was a very smart student, consistently taking 1st to 3rd positions
            throughout my primary and secondary school years, even while being
            actively involved in sports, especially short-distance races (100m
            and 200m) and football. Balancing academics and athletics took
            perseverance and discipline, but I remained committed to both. I was
            awarded a Certificate of Excellence in Sports by the Vice Chancellor
            and graduated with a Second Class Lower degree.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>Work</h5>
          <p className="text-gray mb-0">
            The Head of State General Murtala Mohammed had declared Abuja the
            nation's capital in 1976, and my actual work started 2 years later.
            By the time I joined FCDA in 1981, Abuja was still very young. I
            worked with FCDA for 7 years and then left in 1989 for Portland
            Oregon, USA.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <hr className="mb-40" />
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5>My Personal Story</h5>
          <p className="text-gray text-justify mb-0">
            My life actually changed for good while living in the USA. First, I
            got more education in business and more importantly in Marketing and
            Sales. I also did a lot of self-motivational courses in psychology
            and sales. My confidence grew while in the USA. I worked for UPS
            (United Parcel Service), one of the world's leading parcel
            companies. It was a baptism of fire, the most tedious job you can
            imagine. As a student at Portland State University, UPS regularly
            recruited from our campus, and this worked in my favour. The
            attraction for me was the late night shift which enabled me to
            prioritize my studies while juggling other responsibilities. Equally
            pleasing, their pay per hour was more than double the minimum wage.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5> My Personal Story</h5>
          <p className="text-gray mb-0">
            Unfortunately, the work at UPS was so tedious, and most times after
            covering long night shifts, I would not have the energy to go to
            school because I would sleep all day. I vowed while working for UPS
            that I would work for myself and own my own business. I made a
            personal vow that if I could put half the energy into my own
            business, I would surely succeed. That inherent drive in me led to
            brainstorming about business ideas. I started a one-man carpet
            cleaning business. When I came back to Nigeria, I started Cheers
            Hotel and continued my Real Estate practice in Abuja. I was doing
            well in both my practice and business and was extending significant
            empowerment to my people in my village. My people then invited me to
            join politics because they figured out my generosity could carry me
            through, and it did.
          </p>
        </div>
        {/* End Col */}
      </div>

      <div className="row">
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>House of Rep </h5>
          <p className="text-gray mb-0">
            I began my political journey in 2005 when I joined PDP. I contested
            and won my first election to the House of Representatives in 2007,
            having been in politics for less than two years. Again, I was
            re-elected in 2011 under ACN/APC. To date, I remain the very first
            and still the only person from Anambra State to be elected to the
            House of Reps under the ACN/ APC party. While in the House of
            Representatives, I was elevated to a Fellow at NIESV in 2014, in
            recognition of my professional accomplishments and contributions to
            the field.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>Journey</h5>
          <p className="text-gray mb-0">
            Well, I restarted my practice in 2020 and also gave full attention
            to my Hotel business. I have been fairly successful. As I reflect on
            my life’s journey—shaped by local and international education,
            extensive self-development, a broad range of professional
            experiences both at home and abroad, as well as my involvement in
            politics and philanthropy—I am driven by a vision to use my skills
            to give back to society in a meaningful and impactful way, while
            also building sustainable success. This is the foundation and
            mission of HonourableOdedo.com.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>Current Focus</h5>
          <p className="text-gray mb-0">
            My current focus is on helping individuals acquire or sell land and
            property in Abuja, FCT. We’ve developed a special initiative
            tailored for the diaspora community “Diasporas: Own a Piece of
            Abuja.” This program provides access to estate land or property with
            a clear pathway to obtaining a Certificate of Occupancy (C of O).
            Despite the challenges many Nigerians face abroad, the current
            exchange rate presents a unique advantage. With approximately $3,000
            USD, you can begin your journey to owning land in Abuja. To get
            started, I invite you to visit Abuja, stay at my hotel, enjoy a
            guided tour of the city, and explore available properties firsthand
            before making your investment.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
  );
}
