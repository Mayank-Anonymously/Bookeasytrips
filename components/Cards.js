import React from "react";
import Slider from "react-slick";

export default function Cards() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid slick-container mb-5">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1 mt-3">
        <h2 className="section-title text-black font-size-30 font-weight-bold">
          Today's Top Deals
        </h2>
      </div>
      <Slider {...settings}>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            he has been a pleasure to work with, and we couldn't be happier with
            the results!
          </p>
        </div>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            {" "}
            During the process He was always available to answer our questions
            and provide helpful advice.
          </p>
        </div>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            He was always available to answer our questions and provide helpful
            advice.{" "}
          </p>
        </div>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            He was always available to answer our questions and provide helpful
            advice.{" "}
          </p>
        </div>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            He was always available to answer our questions and provide helpful
            advice.{" "}
          </p>
        </div>
        <div className="test-card">
          <img src="/images/destination/america.jpg" />

          <h5>Jet Airways</h5>

          <p>
            He was always available to answer our questions and provide helpful
            advice.{" "}
          </p>
        </div>
      </Slider>
    </div>
  );
}
