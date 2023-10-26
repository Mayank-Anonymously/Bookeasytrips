import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import BreadBanner from "../components/BreadBanner";

const Terms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `${host}seo/terms-and-condition/get-terms-and-condition/${siteid}/terms`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const { response, baseResponse } = data;

  return (
    <>
      <BreadBanner main="Terms & Conditions" breadsub="Terms & Conditions" />
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
export default Terms;
