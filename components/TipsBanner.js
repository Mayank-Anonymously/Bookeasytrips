import React from "react";

const TipsBanner = () => {
  return (
    <>
      <div
        className="banner-block banner-v1 bg-img-hero space-3"
        style={{ backgroundImage: "url(images/tips.jpg)" }}
      >
        <div
          className="max-width-650 mx-auto text-center mt-xl-5 mb-xl-2 px-3 px-md-0"
          style={{ paddingTop: "155px" }}
        >
          <h6 className="text-white font-size-40 font-weight-bold mb-1">
            Travel Tips
          </h6>
          <p className="text-white font-size-18 font-weight-normal mb-4 pb-1 px-md-3 px-lg-0">
            Northern Ireland’s is now contingent. Britain is getting a divorce
            Northern Ireland is being offered a trial separation for Britain
            there is a one
          </p>
          <a
            className="white-btn btn btn-outline-white border-width-2 rounded-xs min-width-200 font-weight-normal transition-3d-hover"
            href="https://transvelo.github.io/mytravel-html/html/blog/blog-list.html"
          >
            Get Inspired
          </a>
        </div>
      </div>
    </>
  );
};

export default TipsBanner;
