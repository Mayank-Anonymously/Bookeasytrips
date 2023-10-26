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
          <img src="/images/carousel/antinio.jpg" />

          <h5>Flights To San Antonio</h5>

          <p>
            Get the best trip to San Antonio with us—it's not just a flight,
            it's an awesome adventure in the sky."
          </p>
        </div>
        <div className="test-card">
          <img src="/images/carousel/atlanta.jpg" />
          <h5>Flights To Louisville</h5>

          <p>
            Get the best trip to Louisville with us—it's not just a flight, it's
            an awesome adventure in the sky."
          </p>
        </div>
        <div className="test-card">
          <img src="/images/carousel/boston.jpg" />

          <h5>Flights To Atlanta</h5>

          <p>
            Get the best trip to Atlanta with us—it's not just a flight, it's an
            awesome adventure in the sky."
          </p>
        </div>
        <div className="test-card">
          <img src="/images/carousel/lasvegas.jpg" />

          <h5>Flights To Las Vegas</h5>

          <p>
            Get the best trip to Las Vegas with us—it's not just a flight, it's
            an awesome adventure in the sky."
          </p>
        </div>
        <div className="test-card">
          <img src="/images/carousel/louisville.jpg" />

          <h5>Flights To Miami</h5>

          <p>
            Get the best trip to Miami with us—it's not just a flight, it's an
            awesome adventure in the sky."
          </p>
        </div>
        <div className="test-card">
          <img src="/images/carousel/miami.jpg" />

          <h5>Flights To Boston</h5>

          <p>
            Get the best trip to Boston with us—it's not just a flight, it's an
            awesome adventure in the sky."
          </p>
        </div>
      </Slider>
    </div>
  );
}
