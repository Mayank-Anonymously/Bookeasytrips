import React, { useState } from "react";

const Dropdown = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRoomsChange = (value) => {
    if (rooms + value >= 1) {
      setRooms(rooms + value);
    }
  };

  const handleAdultsChange = (value) => {
    if (adults + value >= 1) {
      setAdults(adults + value);
    }
  };

  const handleChildrenChange = (value) => {
    if (children + value >= 0) {
      setChildren(children + value);
    }
  };

  return (
    <>
      <div className="dropdown">
        <a
          id="basicDropdownClickInvoker"
          className="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2"
          href="javascript:;"
          role="button"
          aria-controls="basicDropdownClick"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
          data-unfold-event="click"
          data-unfold-target="#basicDropdownClick"
          data-unfold-type="css-animation"
          data-unfold-duration="300"
          data-unfold-delay="300"
          data-unfold-hide-on-scroll="true"
          data-unfold-animation-in="slideInUp"
          data-unfold-animation-out="fadeOut"
        >
          <i className="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-primary font-weight-semi-bold"></i>
          <span className="text-black font-size-16 font-weight-semi-bold">
            {rooms} Rooms - {adults} Adults - {children} Child
          </span>
        </a>
        <div
          id="basicDropdownClick"
          className={`dropdown-menu dropdown-unfold col-11 m-0 ${
            isOpen ? "show" : ""
          }`}
        >
          <div className="w-100 py-2 px-3 mb-3">
            <div className="js-quantity mx-3 row align-items-center justify-content-between">
              <span className="d-block font-size-16 text-secondary font-weight-medium">
                Rooms
              </span>
              <div className="d-flex">
                <button
                  className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleRoomsChange(-1)}
                >
                  <small className="fas fa-minus btn-icon__inner"></small>
                </button>
                <input
                  className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                  type="text"
                  value={rooms}
                  readOnly
                />
                <button
                  className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleRoomsChange(1)}
                >
                  <small className="fas fa-plus btn-icon__inner"></small>
                </button>
              </div>
            </div>
          </div>
          <div className="w-100 py-2 px-3 mb-3">
            <div className="js-quantity mx-3 row align-items-center justify-content-between">
              <span className="d-block font-size-16 text-secondary font-weight-medium">
                Adults
              </span>
              <div className="d-flex">
                <button
                  className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleAdultsChange(-1)}
                >
                  <small className="fas fa-minus btn-icon__inner"></small>
                </button>
                <input
                  className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                  type="text"
                  value={adults}
                  readOnly
                />
                <button
                  className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleAdultsChange(1)}
                >
                  <small className="fas fa-plus btn-icon__inner"></small>
                </button>
              </div>
            </div>
          </div>
          <div className="w-100 py-2 px-3">
            <div className="js-quantity mx-3 row align-items-center justify-content-between">
              <span className="d-block font-size-16 text-secondary font-weight-medium">
                Child
              </span>
              <div className="d-flex">
                <button
                  className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleChildrenChange(-1)}
                >
                  <small className="fas fa-minus btn-icon__inner"></small>
                </button>
                <input
                  className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                  type="text"
                  value={children}
                  readOnly
                />
                <button
                  className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                  onClick={() => handleChildrenChange(1)}
                >
                  <small className="fas fa-plus btn-icon__inner"></small>
                </button>
              </div>
            </div>
          </div>
          <div className="w-100 text-right py-1 pr-5">
            <a
              className="text-primary font-weight-semi-bold font-size-16"
              href="#"
            >
              Done
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
