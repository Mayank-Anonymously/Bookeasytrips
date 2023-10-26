import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import BreadBanner from "../components/BreadBanner";

const Disclaimer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${host}seo/disclaimer/get-disclaimer/${siteid}/disclaimer`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const { response, baseResponse } = data;

  return (
    <>
      <BreadBanner main="Disclaimer" breadsub="Disclaimer" />
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
export default Disclaimer;
