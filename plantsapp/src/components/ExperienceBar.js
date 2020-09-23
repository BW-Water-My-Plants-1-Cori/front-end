import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const ExperienceBar = ({ userXP, userLevel }) => {
  return (
    <>
      <h3>Level: {userLevel}</h3>
      <div className="exp-bar">
        <LinearProgress variant="determinate" value={userXP} />
        <p>Experience: {userXP}XP</p>
      </div>
    </>
  );
};

export default ExperienceBar;
