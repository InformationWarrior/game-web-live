import React from "react";
import Player from "../components/Player";
import PlayersList from "../styles/SectionModules/PlayersList.module.css";
// import heading from "../styles/PlayersList/heading.module.css";
import playerAvatar from "../assets/playerAvatar.png";

function PlayersListSection() {
  const borderColorClasses = [
    "border-green",
    "border-orange",
    "border-blue",
    "border-yellow",
    "border-red",
    "border-violet",
    "border-aqua",
  ];

  const getRandomBorderClass = () => {
    return borderColorClasses[
      Math.floor(Math.random() * borderColorClasses.length)
    ];
  };

  const players = [
    {
      avatar: playerAvatar,
      username: "d3A74F",
      points: "5K",
      percentage: 90.91,
      value: 0.1,
      isWinner: true,
      borderColorClass: getRandomBorderClass(),
    },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },
    // {
    //   avatar: playerAvatar,
    //   username: "d3A74F",
    //   points: "5K",
    //   percentage: 90.91,
    //   value: 0.1,
    //   isWinner: true,
    //   borderColorClass: getRandomBorderClass(),
    // },

    // {
    //   avatar: playerAvatar,
    //   username: "B36D5b",
    //   points: 400,
    //   percentage: 9.09,
    //   value: 0.01,
    //   isWinner: false,
    //   borderColorClass: getRandomBorderClass(),
    // },
    {
      avatar: playerAvatar,
      username: "B36D5b",
      points: 400,
      percentage: 9.09,
      value: 0.01,
      isWinner: false,
      borderColorClass: getRandomBorderClass(),
    },
  ];

  let totalPlayers = 0;
  return (
    <div className={PlayersList.content}>
      <div className={PlayersList.heading}>
        <p className={PlayersList.headingStyle}>{players.length} Players</p>
      </div>
      <div>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

export default PlayersListSection;
