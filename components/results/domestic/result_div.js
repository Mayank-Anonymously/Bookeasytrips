import FlightInfo from "../../../components/flight_atom/FlightInfo";
import AirlinesCheck from "../../../components/flight_atom/AirlinesCheck";
import Stop from "../../../components/flight_atom/Stop";
import React from "react";
import moment from "moment";

const Result_div = (props) => {
  const { name, flightData } = props;
  console.log(flightData);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Stop />
            <AirlinesCheck />
          </div>
          {flightData.map((item, index) => {
            const { outBound, fare } = item;

            return (
              <div className="col-md-9">
                {outBound.map((items, index) => {
                  var duration = moment.duration(items.eft, "minutes");
                  return (
                    <div className="ticket-box">
                      <div className="d-flex mt-5 justify-content-between">
                        <div className="flight-img">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${"SG"}.png`}
                          />
                          <p className="ticket-date">
                            {items.airline}-{items.flightNo}{" "}
                            {items.cabinClass == 1
                              ? "Economy"
                              : items.cabinClass == 2
                              ? "Premium Economy "
                              : items.cabinClass == 3
                              ? "Business"
                              : items.cabinClass == 4
                              ? "First Class"
                              : ""}
                          </p>
                        </div>
                        <div className="time-location text-center">
                          <span className="badge location-badge">
                            {items.fromAirport}
                          </span>
                          <p className="ticket-time">
                            {moment(items.depData).format("hh:mm A")}
                          </p>
                          <span className="ticket-date">
                            {moment(items.departureDate).format("DD MMM YY")}
                          </span>
                        </div>
                        <div className="flight-svg text-center">
                          <div class="direction-line-con">
                            <div class="circle-con">
                              <div class="circle-dot"></div>
                            </div>
                            <hr />
                            <img src="images/flight-grey.svg" alt="" />

                            <div class="circle-con">
                              <div class="circle-dot"></div>
                            </div>
                          </div>
                          <p className="ticket-time">
                            {moment(items.eft).format("hh:mm")}
                          </p>
                          <span className="ticket-stop-span">
                            {outBound.length} Stop
                          </span>
                        </div>
                        <div className="time-location text-center">
                          <span className="badge location-badge">
                            {items.fromAirport}
                          </span>
                          <p className="ticket-time">
                            {moment(items.reachDate).format("hh:mm A")}
                          </p>
                          <span className="ticket-date">
                            {moment(items.reachDate).format("DD MMM YY")}
                          </span>{" "}
                        </div>
                        <div className="price-buy">
                          <span className="price-span">Price</span>
                          <p className="price-tag">
                            ${fare.grandTotal.toFixed()}
                          </p>
                          <button className="book-btn">Book Now</button>
                        </div>
                      </div>
                      {/* <FlightInfo /> */}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Result_div;
