import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Homebanner from "../components/Homebanner";
import Destination from "../components/Destination";
import TipsBanner from "../components/TipsBanner";
import Choose from "../components/Choose";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import Vacation from "@/components/Vacation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Easy Trips</title>
        <meta name="description" content="Book Easy Trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div
        className="container-fluid banner-container"
        style={{
          backgroundImage: `url("images/mainbg.jpg")`,
          height: "125vh",
          marginBottom: "300px",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0000006e",
        }}
      >
        <Navbar />
        <Homebanner />
      </div>
      <Destination />
      <TipsBanner />
      <Vacation
        placeimg="images/about.jpg"
        placehead="Enjoy Your Dream Vacation In Bangkok"
      />
      <div className="container mt-5">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1 mt-3">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-5">
            Today's Top Deals
          </h2>
        </div>
        <div className="row">
          <DestinationCard
            cardimg="images/card/vegas.jpg"
            city="USA"
            country="Flights To Las Vegas"
          />
          <DestinationCard
            cardimg="images/card/toronto.jpg"
            city="Canada"
            country="Flights To Toronto"
          />
          <DestinationCard
            cardimg="images/card/rome.jpg"
            city="Italy"
            country="Flights To Rome"
          />
          <DestinationCard
            cardimg="images/card/miami.jpg"
            city="USA"
            country="Flights To Miami"
          />
          <DestinationCard
            cardimg="images/card/singapore.jpg"
            city="Singapore"
            country="Flights To Singapore"
          />
          <DestinationCard
            cardimg="images/card/bangkok.jpg"
            city="Thailand"
            country="Flights To Bangkok"
          />
        </div>
      </div>
      <Choose />
      <Cards />
      <Footer />
    </>
  );
}
