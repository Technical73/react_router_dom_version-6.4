import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListItems from "./ListItems";

const Careers = () => {
  const CareerData = useLoaderData();
  console.log(CareerData);

  const navLinkStyles = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  };

  return (
    <>
      <h2>Careers</h2>
      {CareerData.map((items) => {
        return (
          <>
            <Link to={items.id.toString()} key={items.id} style={navLinkStyles}>
              <ListItems title={items.title} location={items.location} />
            </Link>
          </>
        );
      })}
    </>
  );
};

export const DataLoader = async () => {
  const response = await fetch("http://localhost:3000/careers");
  if (!response.ok) {
    throw new Error("Job Not Found");
  }
  const jsonLoader = await response.json();
  return jsonLoader;
};
export default Careers;
