import React from "react";

const Heading = ({ tip }) => {
  return (
    <>
      <div className="tip-heading container mt-5">
        <h1>{tip}</h1>
      </div>
    </>
  );
};

export default Heading;
