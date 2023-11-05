import { flight_auth } from "@/static";
import { flight } from "../Flights/static";
import axios from "axios";
const Oneway_api = () => {
  let data = JSON.stringify({
    adults: "1",
    airline: "All",
    browser: "WINDOWS_10",
    cabinType: "1",
    child: 0,
    client: 2,
    currencyCode: "INR",
    device: "Desktop",
    flexibleSearch: false,
    infants: 0,
    infantsWs: 0,
    isNearBy: false,
    limit: 300,
    locale: "en",
    media: "online",
    pageValue: "search",
    rID: "",
    sID: "",
    searchDirectFlight: false,
    searchID: "0fgg48ux7h6421l",
    segment: [
      {
        originAirport: "DEL",
        destinationAirport: "BOM",
        travelDate: "11/10/2023",
      },
    ],
    serverIP: "",
    siteId: 6,
    source: "online",
    tripType: "1",
    userCountry: "IN",
    userIP: "42.108.29.106",
    userSearch: true,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${flight}Flights/GetFlightResult?authcode=${flight_auth}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Oneway_api;
