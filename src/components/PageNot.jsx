import React from "react";
import { Link } from "react-router-dom";

const PageNot = () => {
  return (
    <>
      <h2>
        Dear Users, There is no page in this website that you are looking at
        here...!
      </h2>
      <p>
        Go to the <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default PageNot;
