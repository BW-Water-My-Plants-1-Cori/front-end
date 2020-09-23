import React from "react";
import PlantCard from "./PlantCard";
const Plants = ({ plants, getPlantByID }) => {
  if (plants == undefined) {
    return <div> have no plants</div>;
  }
  return (
    <div className="plant-container">
      {plants.map((plant, index) => {
        return <PlantCard key={index} plant={plant} getPlantByID={getPlantByID} />;
      })}
    </div>
  );
};

export default Plants;
