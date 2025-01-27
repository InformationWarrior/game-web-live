import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import {
  setGameState,
  setInGameMessage,
} from "../../../Common/redux/slices/wheelSpinSlice";

export default function SpinningWheel() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.wheelSpin.gameState);

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Define the prizes and colors
  const segments = ["Prize 1", "Prize 2", "Prize 3"];
  const colors = ["#02B2AF", "#2E96FF", "#B800D8"];

  const data = [
    { name: "Prize 1", value: 25, fill: "#02B2AF" },
    { name: "Prize 2", value: 40, fill: "#2E96FF" },
    { name: "Prize 3", value: 35, fill: "#B800D8" },
  ];

  const segmentAngle = 360;

  // Spin the wheel function
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const spins = Math.floor(Math.random() * 3 + 5); // Random spins between 5 and 7
    const randomAngle = Math.random() * segmentAngle;
    const totalRotation = spins * 360 + randomAngle;

    setRotation((prev) => prev + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const selectedSegment =
        Math.floor(((totalRotation % 360) + segmentAngle / 2) / segmentAngle) %
        segments.length;

      // Dispatch winner message
      const prize = segments[selectedSegment];
      dispatch(setInGameMessage(`You won: ${prize}`));
      dispatch(setGameState("RESET")); // Transition to RESET state
    }, 4000); // Matches animation duration
  };

  // Spin the wheel when the gameState changes to SPINNING
  useEffect(() => {
    if (gameState === "SPINNING") {
      spinWheel();
    }
  }, [gameState]); // Triggered when gameState changes

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.div
        className="wheel"
        animate={{ rotate: rotation }}
        transition={{ duration: 4, ease: "easeOut" }}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="0"
            outerRadius="150"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            wrapperStyle={{
              fontSize: "14px",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
            }}
            contentStyle={{
              backgroundColor: "#fff",
              color: "#000",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
            }}
            itemStyle={{
              color: "#000",
            }}
          />
        </PieChart>
      </motion.div>

      <p
        style={{
          marginTop: "20px",
          fontSize: "16px",
          color: isSpinning ? "#6c757d" : "#000",
          textAlign: "center",
        }}
      >
        .
      </p>
    </div>
  );
}
