import React from "react";
import Plants from "./Plants";
import ExperienceBar from "./ExperienceBar";
const Home = ({
  userLevel,
  userXP,
  plants,
  getPlantByID,
  updatePlantWater,
}) => {
  return (
    <>
      <ExperienceBar userLevel={userLevel} userXP={userXP} />
      <Plants
        plants={plants}
        getPlantByID={getPlantByID}
        updatePlantWater={updatePlantWater}
      />
    </>
  );
};

export default Home;
