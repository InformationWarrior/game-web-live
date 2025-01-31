import React from "react";

// CSS Modules
import PageLayout from "./styles/SectionModules/PageLayout.module.css";
import GridLayout from "./styles/SectionModules/GridLayout.module.css";
import PlayersList from "./styles/SectionModules/PlayersList.module.css";
import SpinWheel from "./styles/SectionModules/SpinWheel.module.css";
import RoundInfo from "./styles/SectionModules/RoundInfo.module.css";
import RoundContents from "./styles/SectionModules/RoundContents.module.css";
import PlayerBets from "./styles/SectionModules/PlayerBets.module.css";

// Components
import RoundInfoSection from "./Sections/RoundInfoSection";
import RoundContentsSection from "./Sections/RoundContentsSection";
import PlayerEntrySection from "./Sections/PlayerEntrySection";
import WheelSection from "./Sections/WheelSection";
import PlayersListSection from "./Sections/PlayersListSection";

function WheelSpin() {
  return (
    <>
      <div className={PageLayout.container}>
        <div className={GridLayout.container}>
          <div className={PlayersList["players-list-container"]}>
            <PlayersListSection />
          </div>
          <div className={SpinWheel.container}>
            <WheelSection />
          </div>
          <div className={RoundInfo.container}>
            <RoundInfoSection />
          </div>
          <div className={RoundContents["round-content-wrapper"]}>
            <RoundContentsSection />
          </div>
          <div className={PlayerBets.container}>
            <PlayerEntrySection />
          </div>
        </div>
      </div>
    </>
  );
}

export default WheelSpin;
