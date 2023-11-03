import Footer from "../components/Footer";
import BreadBanner from "../components/BreadBanner";
import React from "react";

const contact = () => {
  return (
    <>
      <BreadBanner main="Contact Us" breadsub="Contact Us" />
      <section className="wpo-contact-pg-section section-padding mb-5">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Address</h2>
                        <p>5940, Macleod Trail Southwest,</p>
                        <p>Suite 500, Office#511</p>
                        <p>Calagary AB, T2H 2G4</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Email Us</h2>
                        <p>info@bookeasytrips.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i class="fa-solid fa-phone"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Call Now</h2>
                        <p>+1-8888-750-118</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-contact-title">
                <h2>Have Any Question?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  content of a page when looking.
                </p>
              </div>
              <div className="wpo-contact-form-area">
                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-main"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone*"
                    />
                  </div>

                  <div className="fullwidth">
                    <textarea
                      className="form-control"
                      name="note"
                      id="note"
                      placeholder="Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      Get in Touch
                    </button>
                    <div id="loader">
                      <i className="ti-reload" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </section>
      <Footer />
    </>
  );
};

export default contact;
