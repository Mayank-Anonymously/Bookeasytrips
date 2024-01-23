import Navbar from "@/components/Navbar";
import Result_international from "@/components/results/international/Result_international";
import React from "react";

const index = () => {


  return (
    <div>
      <div
        className="container-fluid banner-container"
        style={{
          backgroundImage: `url("/images/mainbg.jpg")`,
          height: "auto",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0000006e",
        }}
      >
        <Navbar />
      </div>
      <div class="mt-5">
        <Result_international name={"item.currency_Name"}  />
      </div>
    </div>
  );
};

export default index;
