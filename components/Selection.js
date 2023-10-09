import React from "react";

const Selection = () => {
  return (
    <>
      <div className="wpo-select-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-select-wrap">
                <div className="wpo-select-area">
                  <form
                    action="https://wpocean.com/html/tf/parador/search.html"
                    className="clearfix"
                  >
                    <div className="select-sub">
                      {/* Datepicker as text field */}
                      <div className="input-group date">
                        <input
                          autoComplete="off"
                          type="text"
                          id="datepicker"
                          placeholder="Check in"
                        />
                        <i className="fi flaticon-calendar" />
                      </div>
                    </div>
                    <div className="select-sub">
                      {/* Datepicker as text field */}
                      <div className="input-group date">
                        <input
                          autoComplete="off"
                          type="text"
                          id="datepicker2"
                          placeholder="Check Out"
                        />
                        <i className="fi flaticon-calendar" />
                      </div>
                    </div>
                    <div className="select-sub">
                      <div className="form-group tourist-group">
                        <div className="tourist-group-wrap">
                          <div className="tourist-inner">
                            <i className="fi flaticon-user" />
                            <ul>
                              <li>
                                <input
                                  disabled=""
                                  type="text"
                                  id="adults"
                                  defaultValue={0}
                                />
                                Adults
                              </li>
                              <li>
                                <input
                                  disabled=""
                                  type="text"
                                  id="children"
                                  defaultValue={0}
                                />
                                Children
                              </li>
                              <li>
                                <input
                                  disabled=""
                                  type="text"
                                  id="rooms"
                                  defaultValue={0}
                                />{" "}
                                Room
                              </li>
                            </ul>
                            <i className="ti-angle-down" />
                          </div>
                          <div className="tourist-dropdown ">
                            <div className="tourist-item">
                              <span>Adults</span>
                              <div className="tourist-item-group">
                                <button type="button" id="adults_dec">
                                  -
                                </button>
                                <input
                                  disabled=""
                                  id="adults_val"
                                  defaultValue={0}
                                  type="text"
                                />
                                <button type="button" id="adults_inc">
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="tourist-item">
                              <span>Children</span>
                              <div className="tourist-item-group">
                                <button type="button" id="children_dec">
                                  -
                                </button>
                                <input
                                  disabled=""
                                  id="children_val"
                                  defaultValue={0}
                                  type="text"
                                />
                                <button type="button" id="children_inc">
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="tourist-item">
                              <span>Rooms</span>
                              <div className="tourist-item-group">
                                <button type="button" id="rooms_dec">
                                  -
                                </button>
                                <input
                                  disabled=""
                                  id="rooms_val"
                                  defaultValue={0}
                                  type="text"
                                />
                                <button type="button" id="rooms_inc">
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="select-sub">
                      <button className="theme-btn" type="submit">
                        Check Availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
