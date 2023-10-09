import React from "react";

const DestinationCard = ({ country, city, cardimg }) => {
  return (
    <>
      <div className="col-md-4">
        <div class="showcase">
          <a href="#" class="travel-card">
            <div class="image">
              <img src={cardimg} />
            </div>
            <div class="content">
              <label class="category">{city}</label>
              <h1 class="topic">{country}</h1>
              <div class="recommendation">
                <div class="score">
                  <span>4.3</span>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div class="comment">(371 Reviews)</div>
              </div>
              <div class="price">
                <div class="discount-info">save upto 30% off</div>
                <div class="original-price">$213</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
