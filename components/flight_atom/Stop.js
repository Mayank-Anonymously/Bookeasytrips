import React from "react";
import Collapsible from "react-collapsible";
const Stop = () => {
  return (
    <>
    <div className="stop-collapse">
      <Collapsible 
        trigger={[
          <span className="trig-span">Choose Stop</span>,
          <i class="fas fa-chevron-down"></i>
        ]}
      >
        <div className="stop-check">
          <div class="form-check stop-checkbox">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="1stop"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Non Stop
            </label>
          </div>
        </div>
        <div className="stop-check">
          <div class="form-check stop-checkbox">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="2stop"
            />
            <label class="form-check-label" for="flexCheckDefault">
              One Stop
            </label>
          </div>
        </div>
        <div className="stop-check">
          <div class="form-check stop-checkbox">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="3stop"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Two Stop
            </label>
          </div>
        </div>
      </Collapsible>
      </div>
    </>
  );
};

export default Stop;
