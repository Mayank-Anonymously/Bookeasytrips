import { flight, flight_auth } from "@/static";
import axios from "axios";
const Oneway_api = (
  travelleradult,
  travellerchildren,
  travellerInfant,
  departure,
  arrival,
  classe,
  tripType,
  startDateFormat,
  endDateFormat,
  setIsLoading,
  isLoading,
  router
) => {
  const segments =
    tripType == 1
      ? [
          {
            originAirport: departure,
            destinationAirport: arrival,
            travelDate: startDateFormat,
          },
        ]
      : [
          {
            originAirport: departure,
            destinationAirport: arrival,
            travelDate: startDateFormat,
          },
          {
            originAirport: arrival,
            destinationAirport: departure,
            travelDate: endDateFormat,
          },
        ];
  let data = JSON.stringify({
    adults: travelleradult,
    airline: "All",
    browser: "WINDOWS_10",
    cabinType: classe,
    child: travellerchildren,
    client: 2,
    currencyCode: "USD",
    device: "Desktop",
    flexibleSearch: false,
    infants: travellerInfant,
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
    segment: segments,
    serverIP: "",
    siteId: 6,
    source: "online",
    tripType: tripType,
    userCountry: "IN",
    userIP: "42.108.29.106",
    userSearch: true,
  });

  console.log(data);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${flight}Flights/GetFlightResult?authcode=${flight_auth}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  setIsLoading(true);
  axios
    .request(config)
    .then((response) => {
      setIsLoading(true);
      if (response.data.flightResult) {
        setIsLoading(false);
        if (isLoading === false) {
          localStorage.setItem(
            "FlightResult",
            JSON.stringify(response.data.flightResult)
          );
          tripType == 2
            ? router.push("/search/dom-two-way")
            : router.push("/search/dom-one-way");
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Oneway_api;
