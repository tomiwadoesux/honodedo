"use client";

export default function Newsletter() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp">
          <h2 className="section-title text-center mb-40">
            Need Help? We will Contact you
          </h2>
          <form
            target="_blank"
            action="https://formsubmit.co/honourableodedo@gmail.com"
            method="POST"
            id="mailchimp"
            className="form newsletter-strong"
          >
            <div className="d-sm-flex justify-content-between mb-20">
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
              <button
                type="submit"
                aria-controls="subscribe-result"
                className="newsletter-button btn btn-mod btn-w btn-large btn-round btn-hover-anim"
              >
                <span>Get Expert Help</span>
              </button>
            </div>
            <div className="form-tip text-center">
              <h3>
                {" "}
                We Listen to what you want, Give you the best advice on it and
                help you get it. Give us your mail and we will contact you
              </h3>
            </div>
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
