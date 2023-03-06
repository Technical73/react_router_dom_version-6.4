import React from "react";
import { Link } from "react-router-dom";

const CareerError = () => {
  return (
    <>
      <h1>Something Went Wrong...!</h1>
      <p>
        Please refresh you page or <Link to="/">Go to Home</Link>
      </p>
    </>
  );
};

export default CareerError;
