import FlightInfo from "../../../components/flight_atom/FlightInfo";
import AirlinesCheck from "../../../components/flight_atom/AirlinesCheck";
import Stop from "../../../components/flight_atom/Stop";
import React from "react";
import moment from "moment";

const Result_international = (props) => {
  const data =
    typeof window !== "undefined" ? localStorage.getItem("FlightResult") : "[]";
  const flightData = JSON.parse(data);
  const { name } = props;


  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <Stop />
            <AirlinesCheck />
          </div>
          <div className="col round-ticket-container">
            {flightData.map((item, index) => {
              const { outBound, fare, inBound } = item;

              return (
                <>
                <div className="row">

                <div className="col-md-6 from">
                  {outBound.map((items, index) => {
                    var duration = moment.duration(items.eft, "minutes");
                    return (
                      <div className="ticket-box mt-3">
                        <div className="d-flex mt-3 justify-content-between">
                          <div className="flight-img round-img">
                            <img
                              src={`https://www.travomint.com/resources/images/airline-logo/${"SG"}.png`}
                            />
                            <p className="ticket-date round-ticket-date">
                              {items.airline}-{items.flightNo}
                              <br/>
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
                            <span className="badge location-badge round-badge">
                              {items.fromAirport}
                            </span>
                            <p className="ticket-time">
                              {moment(items.depData).format("hh:mm A")}
                            </p>
                            <span className="ticket-date round-ticket-date">
                              {moment(items.departureDate).format("DD MMM YY")}
                            </span>
                          </div>
                          <div className="flight-svg text-center">
                            <div class="direction-line-con">
                              <div class="circle-con">
                                <div class="circle-dot"></div>
                              </div>
                              <hr className="round-dashed"/>
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
                            <span className="badge location-badge round-badge">
                              {items.fromAirport}
                            </span>
                            <p className="ticket-time">
                              {moment(items.reachDate).format("hh:mm A")}
                            </p>
                            <span className="ticket-date round-ticket-date">
                              {moment(items.reachDate).format("DD MMM YY")}
                            </span>{" "}
                          </div>
                          <div className="price-buy">
                            <span className="price-span">Price</span>
                            <p className="price-tag">
                              ${fare.grandTotal.toFixed()}
                            </p>
                            <button className="select-button">Select</button>
                          </div>
                        </div>
                        {/* <FlightInfo /> */}
                      </div>
                    );
                  })}
                </div>

                {inBound ? <div className="col-md-6 return">
                
                {inBound.map((items, index) => {
                  var duration = moment.duration(items.eft, "minutes");
                  return (
                    <div className="ticket-box mt-3">
                      
                      <div className="d-flex mt-3 justify-content-between">
                        <div className="flight-img round-img">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${"SG"}.png`}
                          />
                          <p className="ticket-date round-ticket-date">
                            {items.airline}-{items.flightNo}
                            <br/>
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
                          <span className="badge location-badge round-badge">
                            {items.fromAirport}
                          </span>
                          <p className="ticket-time">
                            {moment(items.depData).format("hh:mm A")}
                          </p>
                          <span className="ticket-date round-ticket-date">
                            {moment(items.departureDate).format("DD MMM YY")}
                          </span>
                        </div>
                        <div className="flight-svg text-center">
                          <div class="direction-line-con">
                            <div class="circle-con">
                              <div class="circle-dot"></div>
                            </div>
                            <hr className="round-dashed"/>
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
                          <span className="badge location-badge round-badge">
                            {items.fromAirport}
                          </span>
                          <p className="ticket-time">
                            {moment(items.reachDate).format("hh:mm A")}
                          </p>
                          <span className="ticket-date round-ticket-date">
                            {moment(items.reachDate).format("DD MMM YY")}
                          </span>{" "}
                        </div>
                        <div className="price-buy">
                          <span className="price-span">Price</span>
                          <p className="price-tag">
                            ${fare.grandTotal.toFixed()}
                          </p>
                          <button className="select-button">Select</button>
                        </div>
                      </div>
                      {/* <FlightInfo /> */}
                    </div>
                  );
                })}
              </div> : null}
              </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result_international;
