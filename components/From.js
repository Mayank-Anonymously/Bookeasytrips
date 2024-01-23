import currency from "../utils/currency";
import AirPortData from "../utils/AirPortData";
import React, { useEffect, useState, useRef } from "react";

const From = ({ setarrival, setCountryCode }) => {
  const [active, setActive] = useState("");
  const [inputValue, setInputValue] = useState();
  const [select, setSelectValue] = useState({});
  const [visible, setVisibleValue] = useState(0);
  const [airportName, setAirportName] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [cityName, setCityname] = useState("");
  const [state, setState] = useState({ data: [], loading: false }); // only one data source
  const { data, loading } = state;

  // Redux
  //   const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);
  const changecity = (e) => {
    clickCity();
    const arr = e.target.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");

    setInputValue(str2);
    setVisibleValue(1);
  };

  const AirportFilter = AirPortData.filter(
    (item) => item.countryCode === currency.currency_Code
  );

  const fetchAPI = () => {
    setState({ data: [], loading: true });
    // const sortAirportDataByCountry = AirportFilter;
    setState({ data: AirportFilter, loading: false });
  };

  const filterdData = inputValue // based on text, filter data and use filtered data
    ? AirPortData.filter((item) => {
        const itemData = item.airportName;
        const airportCode = item.airportCode;
        const cityName = item.cityName;
        const countryName = item.countryName;
        const textData = inputValue;
        return (
          airportCode.indexOf(textData.toUpperCase()) > -1 ||
          itemData.indexOf(textData) > -1 ||
          cityName.indexOf(textData) > -1 ||
          countryName.indexOf(textData) > -1
        );
      })
    : data;

  const airportData = (item) => {
    setSelectValue(item);
    setCountryCode(item.countryCode);
    setarrival(item.airportCode);
    setVisibleValue(0);
    setAirportName(airportName);
    setCityname(item.cityName);
    setAirportCode(item.airportCode);
    setActive("active");
  };

  const citybox = useRef();
  const closewithfocus = () => {
    citybox.current.focus();
    citybox.current.value = "";
    setSelectValue({});
    setInputValue("");
    setdisablecity(false);
    setActive("");
    document
      .querySelectorAll(
        ".menuflitem-5,.menuflitem-6,.menuflitem-2,.menuflitem-3,.menuflitemb-3.menuflitem-4,.menuflitem-4"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
  };
  // dropdown hide > outside click hide
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setSelectValue({});
    });
  }, []);
  function documentoutside(e) {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  }
  function clickCity() {
    document.querySelectorAll(".menuflitem-5").forEach(function (el) {
      el.style.display = "block";
    });
    document
      .querySelectorAll(
        ".menuflitem-1,.menuflitem-2,.menuflitem-3,.menuflitemb-4,.menuflitem-6"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
  }

  // setdisablecity
  const [disablecity, setdisablecity] = useState(false);

  function clickBlur() {
    if (inputValue?.length != 0) {
      setdisablecity(true);
    } else {
      setdisablecity(false);
    }
  }

  useEffect(() => {
    fetchAPI();
    setInputValue("");
  }, []);

  return (
    <>
      <div
        className={
          "search-engine-in se-pd  border-gray-800 airnp " +
          (active ? "disabled" : "")
        }
        onClick={(e) => documentoutside(e)}
      >
        <div className="text-black documentoutside">
          <span onClick={() => closewithfocus()}>
            {" "}
            <i className="fa fa-window-close close-icon cityclose" />
          </span>

          <div className={`${"input-group "}`}>
            <span class="input-group-text align-items-center justify-content-center">
              <span className="block truncate col-span-6 font-bold text-sm font-sans  ">
                <i class="fa fa-plane-departure  text-blue-500"></i>
              </span>
            </span>

            <input
              type="text"
              id="selecteds"
              className="form-control"
              value={select ? select.airportName : ""}
              autocomplete="off"
              placeholder="Country, City or Airport"
              ref={citybox}
              onChange={(e) => changecity(e)}
              onFocus={(e) => clickCity()}
              onBlur={(e) => clickBlur()}
              required
            />
          </div>
        </div>
      </div>

      {visible === 1 && (
        <ul
          role="listbox"
          className="menuflitem-5 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded w-100"
          style={{
            overflow: "auto",
            maxHeight: "330px",
            padding: "8px",
            display: "block",
            position: "absolute",
          }}
        >
          {filterdData.map((item, i) => (
            <>
              <div
                className="dataItem w-full px-2 py-1 text-left reset-pointer"
                onClick={() => airportData(item)}
              >
                <div className="flex-grow-1 pr-2 text-left">
                  {item.airportName + "," + item.cityName}
                </div>
                <span className="float-right shadow foot px-4 rounded-xl text-white">
                  {item.airportCode}
                </span>
              </div>
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default From;
