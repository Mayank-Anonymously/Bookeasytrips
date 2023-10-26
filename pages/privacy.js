import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import BreadBanner from "../components/BreadBanner";

const Privacy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `${host}seo/privacy/get-privacy-policy/${siteid}/privacy_policy`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const { response, baseResponse } = data;

  return (
    <>
      <Navbar />
      <BreadBanner main="Privacy Policy" breadsub="Privacy Policy" />
      {response == undefined || response.length == 0 ? (
        <>
          <h2 className="emptydata">Please wait while data is fetching...</h2>
        </>
      ) : (
        <>
          {" "}
          <Head>
            <meta name="description" content={response[0].metaDescription} />
            <meta name="title" content={response[0].metaTitle} />
            <meta name="keyword" content={response[0].metaKeywords} />
          </Head>
          <div className="container about-paragraph mt-5">
            <div
              className="data-about"
              dangerouslySetInnerHTML={{ __html: response[0].content }}
            />
          </div>
        </>
      )}

      <Footer />
    </>
  );
};
export default Privacy;
