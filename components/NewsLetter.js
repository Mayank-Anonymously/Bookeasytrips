import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="wpo-newslatter-section section-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="wpo-section-title-s2">
                <h2>Subscribe &amp; Get Special Discount!</h2>
                <p>
                  Don’t Wanna Miss Somethings? Subscribe Right Now And Get The
                  Special Discount And Monthly Newsletter.
                </p>
              </div>
            </div>
          </div>
          <div className="wpo-newsletter">
            <div className="newsletter-form">
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Address..."
                  required=""
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
        <div className="n-shape">
          <img src="images/nshape1.png" alt="" />
        </div>
        <div className="n-shape2">
          <img src="assets/images/nshape2.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
