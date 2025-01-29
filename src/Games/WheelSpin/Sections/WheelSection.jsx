import React from "react";
import Spinner from "../components/Spinner";
import SpinningWheel from "../components/SpinningWheel";
import WheelWithPin from "../components/WheelWithPin";

function WheelSection() {
  return (
    <div className="wheel-section-container d-flex flex-column justify-content-center">
      <h4 className="text-white mb-4">Current Round</h4>
      <div className="spinner-container d-flex justify-content-center">
        {/* <Spinner /> */}
        {/* <SpinningWheel /> */}
        <WheelWithPin selectedPrize={20} />
      </div>
    </div>
  );
}

export default WheelSection;
