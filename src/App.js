import React, { useState } from "react";
import homeData from "./homeplayersdata";
import awayData from "./awayplayersdata";
import Home from "./Home";
import Away from "./Away";
import Score from "./Score";
function App() {
  const [homescore, setHomeScore] = useState(0);
  const [awayscore, setAwayScore] = useState(0);
  const [color, setColor] = useState("");
  const [homeplayers, setHomePlayers] = useState(homeData);
  const [awayplayers, setAwayPlayers] = useState(awayData);
  const [playerscore, setPlayerScore] = useState(0);
  const changeColor = () => {
    setColor("white");
  };
  return (
    <main>
      <div className='stats'>
        <Score homescore={homescore} awayscore={awayscore} />
        <Home
          homeplayers={homeplayers}
          setHomePlayers={setHomePlayers}
          homescore={homescore}
          setHomeScore={setHomeScore}
        />
      </div>
    </main>
  );
}

export default App;
