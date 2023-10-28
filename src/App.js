import React, { useState } from 'react';
import homeData from './homeplayersdata';
import awayData from './awayplayersdata';
import Players from './Players';
import Away from './Away';
import Score from './Score';
function App() {
	const [homescore, setHomeScore] = useState(0);
	const [awayscore, setAwayScore] = useState(0);
	const [color, setColor] = useState('');
	const [homeplayers, setHomePlayers] = useState(
		homeData.map((h) => ({ ...h, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 })),
	);

	const [awayplayers, setAwayPlayers] = useState(
		homeData.map((h) => ({ ...h, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 })),
	);
	const [playerscore, setPlayerScore] = useState(0);
	const changeColor = () => {
		setColor('white');
	};
	return (
		<main>
			<Score homescore={homescore} awayscore={awayscore} />
			<div className='stats'>
				<div class='team-card'>
					<div className='homeTitle'>
						<h1>HOME</h1>
					</div>
					<Players
						homeplayers={homeplayers}
						setHomePlayers={setHomePlayers}
						homescore={homescore}
						setHomeScore={setHomeScore}
					/>
				</div>

				<div class='team-card'>
					<div className='homeTitle'>
						<h1>Away</h1>
					</div>
					<Players
						homeplayers={awayplayers}
						setHomePlayers={setAwayPlayers}
						homescore={awayscore}
						setHomeScore={setAwayScore}
					/>
				</div>
			</div>
		</main>
	);
}

export default App;
