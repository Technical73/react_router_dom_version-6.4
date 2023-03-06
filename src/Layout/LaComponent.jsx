import React from "react";
import { Outlet } from "react-router-dom";
import { AppBreadCrumbs, Header } from "../components";

const LaComponent = () => {
  return (
    <>
      <Header />
      <AppBreadCrumbs />
      <Outlet />
    </>
  );
};

export default LaComponent;
