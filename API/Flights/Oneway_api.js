import axios from "axios";
import React from "react";

const oneway_api = (
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
  router,
  setErrorState
) => {
  const options = {
    method: "POST",
    url: "https://api.whitefoxtravels.com/search/flight/getFlightResult",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      departure_at: startDateFormat,
      destination: arrival,
      origin: departure,
      return_at: endDateFormat,
      triptype: tripType,
    },
  };
  console.log("apiHite");
  setIsLoading(true);

  axios
    .request(options)
    .then(function (response) {
      if (response.data.message === "Result Fetched") {
        setIsLoading(false);
        router.push(
          `https://www.aviasales.com${response.data.response.data[0].link}`
        );
        if (response.data.length === 0) {
          setErrorState("No Routes Availbale");
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default oneway_api;
