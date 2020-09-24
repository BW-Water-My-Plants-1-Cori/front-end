import React from "react";
import Plants from "./Plants";

import ExperienceBar from "./ExperienceBar";
const Home = ({ userLevel, userXP, plants, getPlantByID }) => {
  return (
    <>
      <ExperienceBar userLevel={userLevel} userXP={userXP} />
      <Plants plants={plants} getPlantByID={getPlantByID} />
    </>
  );
};

export default Home;
