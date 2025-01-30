import React from "react";
import parentLayout from "./styles/parentLayout.module.css";
import gridLayout from "./styles/gridLayout.module.css";
import playersList from "./styles/playersList.module.css";
import spinWheelContainer from "./styles/spinWheelContainer.module.css";
import roundInfoContainer from "./styles/roundInfoContainer.module.css";
import roundContentsContainer from "./styles/roundContentsContainer.module.css";
import playerBetsContainer from "./styles/playerBetsContainer.module.css";

import RoundInfoSection from "./Sections/RoundInfoSection";
import RoundContentsSection from "./Sections/RoundContentsSection";
import PlayerEntrySection from "./Sections/PlayerEntrySection";
import WheelSection from "./Sections/WheelSection";
import PlayersListSection from "./Sections/PlayersListSection";

function Design(props) {
  return (
    <div className={parentLayout.container}>
      <div className={gridLayout.container}>
        <div className={playersList.container}></div>
        <div className={spinWheelContainer.container}></div>
        <div className={roundInfoContainer.container}></div>
        <div className={roundContentsContainer.container}></div>
        <div className={playerBetsContainer.container}></div>
      </div>
    </div>
  );
}

Design.propTypes = {};

export default Design;
