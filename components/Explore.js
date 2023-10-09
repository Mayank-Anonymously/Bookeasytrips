import React from "react";

const Explore = () => {
  return (
    <>
      <section className="wpo-about-section-s3 section-padding">
        <div className="container">
          <div className="wpo-about-section-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <img src="images/about2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-content">
                  <div className="about-title">
                    <span>About Us</span>
                    <h2>Explore All Corners Of The World With Us</h2>
                  </div>
                  <div className="wpo-about-content-inner">
                    <p className="mb-5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure.
                    </p>
                    <a className="theme-btn">Discover More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
