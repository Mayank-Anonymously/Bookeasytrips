import React from "react";
import Engine from "./Engine";
const Homebanner = () => {
  return (
    <>
      <div className="container home-banner">
        <div className="row ">
          <div className="py-8 py-xl-10 pb-5 text-center  mb-5">
            <h1 className="banner-heading">Let&lsquo;s The World Together!</h1>
            <p className="banner-para text-white">
              Find awesome hotel&lsquo; tour&lsquo; car and activities in London
            </p>
          </div>
          <div className="book-flight-engine">
            <Engine />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
