import React, { useState } from "react";
import HomePlayerOne from "./HomePlayerOne";

const Home = ({ homeplayers, homescore, setHomeScore }) => {
  return (
    <section className='card'>
      {homeplayers.map((players) => {
        return (
          <>
            <HomePlayerOne
              homescore={homescore}
              setHomeScore={setHomeScore}
              key={players.id}
              {...players}
            />
          </>
        );
      })}
    </section>
  );
};

export default Home;
