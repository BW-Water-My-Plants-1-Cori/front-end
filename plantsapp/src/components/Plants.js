import React from "react";
import PlantCard from "./PlantCard";
const Plants = ({ plants }) => {
  return (
    <div className="plant-container">
      {plants.map((plant, index) => {
        return <PlantCard key={index} plant={plant} />;
      })}
    </div>
  );
};

export default Plants;
