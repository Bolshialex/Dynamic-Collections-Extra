import React from "react";

function PlayerCard(players) {
  return (
    <>
      <div className="player-card">
        <img src={players.img} alt={players.name} />
        <h3>{players.name}</h3>
        <p className="position">Position {players.position}</p>
        <p className="jersey">#{players.jersey}</p>
        <p className="age">Age: {players.name}</p>
        <p className="stats">Batting AVG: {players.stat}</p>
      </div>
    </>
  );
}

export default PlayerCard;
