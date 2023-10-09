import NewsLetter from "../components/NewsLetter";
import BreadBanner from "../components/BreadBanner";
import Heading from "../components/Heading";
import SlideShow from "../components/SlideShow";
import React from "react";
import Vacation from "../components/Vacation";
import Explore from "../components/Explore";
import Cards from "../components/Cards";
import TipsBanner from "../components/TipsBanner";
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
      <BreadBanner main="About Us" breadsub="About" />
      <Heading tip="We’re truely dedicated to make your travel experience as much simple and fun as possible!" />
      <SlideShow />
      <Explore />
      <TipsBanner />
      <Vacation
        placeimg="images/about.jpg"
        placehead="Enjoy Your Dream Vacation In Bangkok"
      />
      <Cards />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default about;
