import React from "react";

const ListItems = ({ title, location }) => {
  return (
    <>
      <div className="py-4">
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </>
  );
};

export default ListItems;
