import React from "react";

const Vacation = ({ placeimg, placehead }) => {
  return (
    <>
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-section-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <img src={placeimg} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-content">
                  <div className="about-title">
                    <span>Exclusive Offer</span>
                    <h2>{placehead}</h2>
                  </div>
                  <div className="wpo-about-content-inner">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure.
                    </p>
                    <div className="about-info-wrap">
                      {/* <div className="about-info-left">
                        <p>2 Days / 3 Night</p>
                        <ul>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" aria-hidden="true" />
                            </span>
                          </li>
                        </ul>
                      </div> */}
                      <div className="about-info-right">
                        <p>Starting from</p>
                        <h3>$500</h3>
                      </div>
                    </div>
                    <a href="room.html" className="theme-btn">
                      Book Now
                    </a>
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

export default Vacation;
