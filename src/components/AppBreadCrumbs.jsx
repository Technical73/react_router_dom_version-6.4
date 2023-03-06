import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const AppBreadCrumbs = () => {
  const location = useLocation();
  console.log(location);

  let crumbLink = "";

  const crumbPath = location.pathname
    .split("/")
    .filter((items) => items !== "")
    .map((items, index, array) => {
      crumbLink = `/${items}`;
      return (
        <span key={crumbLink}>
          <Link to={crumbLink}>{items}</Link>
          {index < array.length - 1 && " / "}
        </span>
      );
    });

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>{crumbPath}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default AppBreadCrumbs;
