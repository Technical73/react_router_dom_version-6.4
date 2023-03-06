import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  console.log(id);
  const useData = useLoaderData();
  console.log(useData);
  return (
    <>
      <h3>{useData.title}</h3>
      <p>{useData.salary}</p>
      <p>{useData.location}</p>
    </>
  );
};

export const DetailsofCareer = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:3000/careers/" + id);

  if (!response.ok) {
    throw new Error("Job post Not Found");
  }
  const CareerDe = await response.json();
  return CareerDe;
};

export default CareerDetails;
