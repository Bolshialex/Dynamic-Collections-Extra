import React from "react";
import Teams from "./Teams";

function PlayerCard(player) {
  console.log(player);
  return (
    <>
      <div className="player-card">
        <img src={player.img} alt={player.name} />
        <h3>{player.name}</h3>
        <p className="position">Position {player.position}</p>
        <p className="jersey">#{player.jersey}</p>
        <p className="age">Age: {player.name}</p>
        <p className="stats">Batting: {player.stat}</p>
        <Teams teams={player.teams} />
      </div>
    </>
  );
}

export default PlayerCard;
