import { useState, createContext } from "react";
import { Tab } from "@headlessui/react";
import { addDays } from "date-fns";
import * as React from "react";
import Alert from "react-bootstrap/Alert";

// import DatePicker from "react-date-picker";

import Calendar from "react-calendar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Passanger from "./Passenger";
import Class from "./Class";
import From from "./From";
import To from "./To";
import { useRouter } from "next/router";
// import { useDispatch, useSelector } from "react-redux";
// import { checkFlights } from "../Feature/Action";
import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import getappnow from "../../public/Image/getapp-now.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Engine(props) {
  const router = useRouter();
  const [Result, setResult] = useState({});
  const [Load, setLoad] = useState(false);
  const [resturnDate, setreturnd] = useState(false);
  //   const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const [showappnow, setShowappnow] = useState(true);

  const year = moment().add(5, "months").format("MM/DD/YYYY");

  // rest
  const [value, setValue] = React.useState([null, null]);
  let [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = React.useState(new Date());

  function closeModal() {
    setIsOpen(false);
  }
  function setdateReturn() {
    setreturnd(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function setdate() {
    setIsOpen(false);
    setstartDate(state[0].startDate);
    setendDate(state[0].endDate);
  }
  const [startDate, setstartDate] = useState(state[0].startDate);
  const [endDate, setendDate] = useState(state[0].endDate);

  // Full data
  // const [single_date, setsingle_date] = useState(
  //   startDate.toLocaleDateString()
  // );
  const [departure, setdeparture] = useState("");
  const [arrival, setarrival] = useState("");
  const [classe, setclasse] = useState(1);
  const [travelleradult, settravelleradult] = useState(1);
  const [travellerchildren, settravellerchildren] = useState(0);
  const [travellerInfant, settravellerInfant] = useState(0);
  const [nameofclass, setnameofclass] = useState("ECONOMY");
  const [tripType, setTripType] = useState(1);
  const [CountryCode, setCountryCode] = useState("");
  const [ArCountryCode, setArCountryCode] = useState("");
  const [openTab, setOpenTab] = useState(1);
  const [oneWay, setOneway] = useState(1);
  const [twoWay, setTwoway] = useState(2);
  const [valueChange, setValueChange] = useState(false);
  const [valueDate, onChange] = useState(new Date());
  const [valueDateReturn, onChangeReturn] = useState(new Date());

  //   const dispatch = useDispatch();

  const resultoneway = "/Results";
  const resultroundway = "/Results2";

  // Ios

  const startDateFormat = moment(state[0].startDate, "DD/MM/YYYY").format(
    "MM/DD/YYYY"
  );

  const startDateFormat2 = moment(state[0].startDate).format("MM/DD/YYYY");

  // Window
  const endDateFormat = moment(state[0].endDate, "DD/MM/YYYY").format(
    "MM/DD/YYYY"
  );

  const endDateFormat2 = moment(state[0].endDate).format("MM/DD/YYYY");

  const startDates12 =
    startDateFormat === "Invalid date" ? startDateFormat2 : startDateFormat;

  const endDates34 =
    endDateFormat === "Invalid date" ? endDateFormat2 : endDateFormat;

  //   const searchFlight = () => {
  //     if (!departure && !arrival) {
  //       alert("Please Fill Yours Destination");
  //     } else if (!departure) {
  //       alert("Please Fill To Destination");
  //     } else if (!arrival) {
  //       alert("Please Fill From Destination");
  //     } else if (!startDate.toLocaleDateString()) {
  //       alert("Please Select Your Travel Date");
  //     } else if (departure === arrival) {
  //       alert("Please Select Your Travel Date");
  //     } else {
  //       if (tripType === 1) {
  //         dispatch(
  //           checkFlights({
  //             departure: arrival,
  //             arrival: departure,
  //             adult: travelleradult,
  //             children: travellerchildren,
  //             infant: travellerInfant,
  //             class: classe,
  //             startDates: startDates12,
  //             endDates: endDates34,
  //             singleDate: startDates12,
  //             nameClass: nameofclass,
  //             tripType: tripType,
  //             CountryCode: CountryCode,
  //             ArCountryCode: ArCountryCode,
  //             totalpassanger:
  //               travellerchildren + travellerInfant + travelleradult,
  //             login: true,
  //             currencyCode: currency_Name_rd.currency_Name,
  //             source: "online",
  //           })
  //         );
  //         router.push(resultoneway);
  //       } else {
  //         dispatch(
  //           checkFlights({
  //             departure: arrival,
  //             arrival: departure,
  //             adult: travelleradult,
  //             children: travellerchildren,
  //             infant: travellerInfant,
  //             class: classe,
  //             startDates: startDates12,
  //             endDates: endDates34,
  //             singleDate: startDates12,
  //             nameClass: nameofclass,
  //             tripType: tripType,
  //             CountryCode: CountryCode,
  //             ArCountryCode: ArCountryCode,
  //             totalpassanger:
  //               travellerchildren + travellerInfant + travelleradult,
  //             login: true,
  //             currencyCode: currency_Name_rd.currency_Name,
  //             source: "online",
  //           })
  //         );
  //         router.push(resultroundway);
  //       }
  //     }
  //   };

  const ChangeDateColumn = () => {
    setTripType(1);
    setValueChange(false);
  };
  const ShowDateChange = () => {
    setValueChange(true);
    setTripType(2);
  };

  return (
    <>
      <Container>
        <Tab.Group defaultIndex={0}>
          <div className="w-100">
            <div className="w-full  engines">
              {/* -------------radio Button ------------ */}
              <div className="custom_radio">
                <span className="roundway-rab">
                  <input
                    type="radio"
                    id="twoway"
                    onChange={ShowDateChange}
                    name="search flight"
                    checked={tripType === 2 && true}
                  />
                  <label htmlFor="twoway" className="m-0 status-spantext">
                    Round Trip
                  </label>
                </span>

                <span className="oneway-tab">
                  <input
                    type="radio"
                    id="oneway"
                    onChange={ChangeDateColumn}
                    name="search flight"
                    checked={tripType === 1 && true}
                  />
                  <label htmlFor="oneway" className="m-0 status-spantext">
                    One way
                  </label>
                </span>
              </div>
              {/* -------------radio Button ------------ */}

              <Tab.Panel
                key="1"
                className={
                  "rounded-xl focus:outline-none   ring-white ring-opacity-60"
                }
              >
                {/* ---------------top passanger and class-----------  */}
                <Row className="passanger-infant mt-4 mb-2 d-none d-md-flex">
                  <Col xs={12} md={6} xl={4} xxl={3} className="settravrad">
                    <Passanger
                      settravelleradult={settravelleradult}
                      settravellerchildren={settravellerchildren}
                      settravellerInfant={settravellerInfant}
                    />
                  </Col>

                  <Col xs={12} md={6} xl={4} xxl={3}>
                    <Class
                      setclasse={setclasse}
                      setnameofclassName={setnameofclass}
                    />
                  </Col>
                </Row>
                {/* ---------------top passanger and class-----------  */}

                <div className="w-100">
                  <div className="w-100 mt-3">
                    <Row className="ps-relative enginefrom-set">
                      {/* ---------------from------------------- */}
                      <Col
                        xs={12}
                        lg={3}
                        md={3}
                        className="relative reponsive return-tripinput"
                      >
                        <label className="form-label d-block">From</label>

                        <From
                          setarrival={setarrival}
                          setCountryCode={setCountryCode}
                        />
                      </Col>
                      {/* ---------------from------------------- */}

                      {/* ----------------To--------------- */}
                      <Col
                        xs={12}
                        lg={3}
                        md={3}
                        className="relative return-tripinput"
                      >
                        <label className="form-label d-block">To</label>
                        <To
                          setdeparture={setdeparture}
                          setArCountryCode={setArCountryCode}
                        />
                      </Col>
                      {/* ----------------To--------------- */}
                      {/* // Sachin code */}

                      <Col>
                        <Row>
                          {/*--------------- departure--------------  */}
                          <Col xs={6} lg={4} md={4} className="datedep">
                            <label className="form-label d-block">
                              Depature{" "}
                            </label>

                            <div className="search-engine-in se-pd border-gray-800">
                              <div className="input-group">
                                <span className="input-group-text align-items-center justify-content-center">
                                  <span className="block truncate text-sm text-black py-1 font-sans font-bold">
                                    {/* <FontAwesomeIcon
                                      icon="fa-solid fa-calendar-days"
                                      className="text-blue-500"
                                    /> */}
                                  </span>
                                </span>
                                <input
                                  type="date"
                                  // value={startDate.toLocaleDateString()}
                                  // onClick={openModal}
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </Col>
                          {/*--------------- departure--------------  */}

                          {/* ----------------Return--------------  */}
                          <Col xs={6} lg={4} md={4} className="datedep">
                            {/* </div> */}
                            {tripType === 2 ? (
                              <>
                                {" "}
                                {/* <div className="depature-return round-trip  ps-relative width-50 De-pd d-flex justify-content-start align-items-start flex-column ps-relative1  "> */}
                                <label className="form-label d-block">
                                  Return
                                </label>
                                <div className="search-engine-in se-pd  border-gray-800 return-tripinput">
                                  {/* <span onClick={() => setTripType(1)}>
                                    {" "}
                                    <i className="fa fa-window-close close-icon" />
                                  </span> */}
                                  <div className="input-group">
                                    <span className="input-group-text align-items-center justify-content-center">
                                      <span className="block truncate text-sm text-black py-1 font-sans font-bold">
                                        {/* <FontAwesomeIcon
                                          icon="fa-solid fa-calendar-days"
                                          className="text-blue-500"
                                        /> */}
                                      </span>
                                    </span>
                                    <input
                                      type="date"
                                      // value={endDate.toLocaleDateString()}
                                      // onClick={openModal}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <label className="form-label d-block">
                                  Return
                                </label>
                                <div className="search-engine-in se-pd  border-gray-800">
                                  <div
                                    className="input-group static-pos"
                                    onClick={ShowDateChange}
                                  >
                                    <span className="input-group-text d-flex align-items-center justify-content-start">
                                      Tap to add a return date for round Trip.
                                    </span>
                                  </div>
                                </div>
                              </>
                            )}
                          </Col>
                          {/* ----------------Return--------------  */}
                          {/* ----------------Return--------------  */}
                          <Col xs={6} lg={4} md={4} className="datedep">
                            {/* </div> */}
                            {/* <label>Search flights</label> */}
                            <Button
                              onClick={() => searchFlight()}
                              className="search-flight-btn"
                            >
                              Search Flight{" "}
                              <i className="fa fa-arrow-right"></i>
                            </Button>
                          </Col>
                          {/* ----------------Return--------------  */}
                        </Row>
                      </Col>
                    </Row>

                    {/* ---------------top passanger and class-----------  */}
                    <Col xs={12} className="d-md-none mpob-inf">
                      <Row className="passanger-infant mt-3">
                        <Col
                          xs={12}
                          md={6}
                          xl={4}
                          xxl={3}
                          className="settravrad"
                        >
                          <Passanger
                            settravelleradult={settravelleradult}
                            settravellerchildren={settravellerchildren}
                            settravellerInfant={settravellerInfant}
                          />
                        </Col>

                        <Col xs={12} md={6} xl={4} xxl={3}>
                          <Class
                            setclasse={setclasse}
                            setnameofclassName={setnameofclass}
                          />
                        </Col>
                      </Row>
                    </Col>
                    {/* ---------------top passanger and class-----------  */}

                    <div className="text-right mt-4">
                      {/* <div className="d-xl-inline-block">
                        <Button
                          onClick={() => searchFlight()}
                          className="btn btn-siteorange search-fl"
                        >
                          Search Flight <i className="fa fa-arrow-right"></i>
                        </Button>
                      </div> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </div>
          </div>
        </Tab.Group>
      </Container>
    </>
  );
}
