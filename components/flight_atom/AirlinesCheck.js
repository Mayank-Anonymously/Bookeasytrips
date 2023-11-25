import React from "react";
import Collapsible from "react-collapsible";
const AirlinesCheck = () => {
  return (
    <>
    <div className="stop-collapse mt-3">
      <Collapsible 
        trigger={[
          <span className="trig-span">Airlines</span>,
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
              <img className="checkbox-flight" src="images/check.png" />  SpiceJet
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
             <img className="checkbox-flight" src="images/check.png" />  SpiceJet
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
             <img className="checkbox-flight" src="images/check.png" />  SpiceJet
            </label>
          </div>
        </div>
      </Collapsible>
      </div>
    </>
  );
};

export default AirlinesCheck;
