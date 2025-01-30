import React from "react";
import WheelWithPin from "../components/WheelWithPin";
import SpinWheel from "../styles/SectionModules/SpinWheel.module.css";

function WheelSection() {
  return (
    <div className={SpinWheel.content}>
      <h4 className={SpinWheel.heading}>Current Round</h4>
      <div className={SpinWheel.main}>
        <WheelWithPin />
      </div>
    </div>
  );
}

export default WheelSection;
