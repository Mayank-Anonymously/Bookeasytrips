import React from "react";
const SearchEngine = () => {
  return (
    <>
      <div className="container search-engine">
        <form id="flight-search-form">
          <div class="input-group">
            <label for="departure">Departure:</label>
            <input type="text" id="departure" name="departure" required />
          </div>
          <div class="input-group">
            <label for="destination">Destination:</label>
            <input type="text" id="destination" name="destination" required />
          </div>
          <div class="input-group">
            <label for="departure-date">Departure Date:</label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              required
            />
          </div>

          <div class="input-group">
            <label for="passengers">Passengers:</label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              min="1"
              required
            />
          </div>
          <button type="submit">Search Flights</button>
        </form>
      </div>
    </>
  );
};

export default SearchEngine;
