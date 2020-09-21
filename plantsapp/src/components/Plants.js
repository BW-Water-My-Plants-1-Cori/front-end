import React from "react";
import PlantCard from "./PlantCard";
const Plants = ({ plants }) => {
  return (
    <div className="plant-container">
      {plants.map((plant) => {
        return <PlantCard plant={plant} />;
      })}
    </div>
  );
};

export default Plants;
