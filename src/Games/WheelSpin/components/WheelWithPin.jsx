import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import {
  setGameState,
  setInGameMessage,
} from "../../../Common/redux/slices/wheelSpinSlice";
import pinImage from "../assets/pin1.webp";

// Define prizes and colors
const segments = ["Prize 1", "Prize 2", "Prize 3"];
// const data = [
//   { name: "Prize 1", value: 25, fill: "#02B2AF" },
//   { name: "Prize 2", value: 40, fill: "#2E96FF" },
//   { name: "Prize 3", value: 35, fill: "#B800D8" },
// ];

const data = [
  { name: "Prize 1", value: 25, fill: "red" },
  { name: "Prize 2", value: 40, fill: "green" },
  { name: "Prize 3", value: 35, fill: "blue" },
];

const segmentAngle = 360 / segments.length; // Angle per segment

export default function WheelWithPin() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.wheelSpin.gameState);

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [tooltipContent, setTooltipContent] = useState("Spin the Wheel!");

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setTooltipContent(null);

    const spins = Math.floor(Math.random() * 3 + 5); // Random full spins (5-7)
    const randomAngle = Math.random() * segmentAngle; // Random stop angle within a segment
    const totalRotation = spins * 360 + randomAngle;

    setRotation((prev) => prev + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      // Determine the winning segment
      const finalAngle = ((totalRotation % 360) + segmentAngle / 2) % 360;
      const winningIndex = Math.floor(finalAngle / segmentAngle);
      const winningPrize = segments[winningIndex];

      dispatch(setInGameMessage(`You won: ${winningPrize}`));
      dispatch(setGameState("RESET"));
      setTooltipContent(`Player ${winningIndex} is the winner`);
    }, 4000);
  };

  useEffect(() => {
    if (gameState === "SPINNING") {
      spinWheel();
    }
  }, [gameState]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Pin Image */}
      <img
        src={pinImage}
        alt="Pin"
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          width: "40px",
        }}
      />

      {/* Wheel */}
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "3px solid yellow",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 1,
          }}
        >
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={150}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </motion.div>

        {/* Center Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {tooltipContent}
        </div>
      </div>
    </div>
  );
}
