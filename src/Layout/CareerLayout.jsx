import React from "react";
import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <>
      <h5>
        React-Bootstrap replaces the Bootstrap JavaScript. Each component has
        been built from scratch as a true React component, without unneeded
        dependencies like jQuery.
      </h5>
      <div className="py-4">
        <Outlet />
      </div>
    </>
  );
};

export default CareerLayout;
