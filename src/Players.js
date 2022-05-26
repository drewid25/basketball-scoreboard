import React, { useState } from "react";
import HomePlayerOne from "./HomePlayerOne";

const Players = ({ homeplayers, homescore, setHomePlayers, setHomeScore }) => {
  const handleClick =
    (index) =>
    (key, amount = 1) =>
    () => {
      const players = [...homeplayers];
      players[index][key] += amount;
      setHomePlayers(players);
      if (key === "pts") {
        setHomeScore(homescore + amount);
      }
    };
  const handleClick1 =
    (index) =>
    (key, amount = 1) =>
    () => {
      const players = [...homeplayers];
      players[index][key] -= amount;
      setHomePlayers(players);
      if (key === "pts") {
        setHomeScore(homescore - amount);
      }
      console.log("hero");
    };
  return (
    <section className='card'>
      {homeplayers.map((player, index) => {
        return (
          <>
            <HomePlayerOne
              homescore={homescore}
              setHomeScore={setHomeScore}
              player={player}
              key={player.id}
              handleClick={handleClick(index)}
              handleClick1={handleClick1(index)}
              {...player}
            />
          </>
        );
      })}
    </section>
  );
};

export default Players;
