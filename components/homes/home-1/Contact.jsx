"use client";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Contact() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Contact Us</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Let’s start the work." />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-60 mb-sm-50">
            {/* Contact Item */}
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <div className="alt-features-icon-s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </div>
                </div>
                <h4 className="alt-features-title">Say hello</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href="mailto:honourableodedo@gmail.com">
                      honourableodedo@gmail.com
                    </a>
                  </div>
                  <div>+234 811 111 4541</div>
                  <div>+234 811 111 4542</div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                  </svg>
                </div>
                <h4 className="alt-features-title">Locations</h4>
                <div className="alt-features-descr">
                  16 Mekong Crescent, Maitama, Abuja.
                </div>
                <div className="alt-features-descr">
                  20 Benue Cres, Garki, Abuja.
                </div>
              </div>
            </div>
            {/* End Contact Item */}
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {/* Contact Form */}
          <form
            target="_blank"
            action="https://formsubmit.co/honourableodedo@gmail.com"
            method="POST"
            className="form contact-form pe-lg-5"
            id="contact_form"
          >
            <div className="row">
              <div className="col-lg-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                {/* Send Button */}
                <div className="pt-20">
                  <button
                    type="submit"
                    className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">{/* Inform Tip */}</div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          {/* Google Map */}
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3432603473675!2d7.464226675077553!3d9.032418291029066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b644199d2ed%3A0x11421f9fa37a9ce7!2s20%20Benue%20Cres%2C%20Garki%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1745001052799!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
}
