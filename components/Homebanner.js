import React from "react";
import Engine from "./Engine";
// import Selection from "./Selection";

const Homebanner = () => {
  return (
    <>
      <div className="container home-banner">
        <div className="row ">
          <div className="py-8 py-xl-10 pb-5 text-center  mb-5">
            <h1 className="banner-heading">Let's The World Together!</h1>
            <p className="banner-para text-white">
              Find awesome hotel, tour, car and activities in London
            </p>
          </div>
          <div className="book-flight-engine">
            <Engine />
          </div>
        </div>
      </div>
      {/* <Selection /> */}
    </>
  );
};

export default Homebanner;
