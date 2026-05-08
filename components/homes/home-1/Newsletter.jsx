"use client";

import FilledArrowButton from "@/components/common/FilledArrowButton";

export default function Newsletter() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp">
          <h2 className="section-title text-center mb-40">
            Looking for the right property in Abuja?
          </h2>
          <form
            target="_blank"
            action="https://formsubmit.co/honourableodedo@gmail.com"
            method="POST"
            id="mailchimp"
            className="form newsletter-strong"
          >
            <div className="d-sm-flex justify-content-between align-items-center gap-3 mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder="Enter your email"
                className="newsletter-field input-lg round"
                id="Expert-Help-email"
                name="Expert-Help-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
              <FilledArrowButton type="submit" size="lg">
                Get Expert Help
              </FilledArrowButton>
            </div>
            <p
              className="text-center"
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.78)",
                margin: "0 auto",
                maxWidth: "44ch",
                fontWeight: 400,
              }}
            >
              Tell us what you have in mind and we will send you the right
              matches. Drop your email and we will be in touch.
            </p>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
