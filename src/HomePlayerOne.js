import { useState } from 'react';
import Button from './Button';

const HomePlayerOne = ({
	number,
	pts,
	reb,
	ast,
	stl,
	blk,
	name,
	id,
	image,
	homescore,
	setHomeScore,
	player,
	handleClick,
	handleClick1,
}) => {
	return (
		<>
			<article className='homeplayercard'>
				<div className='personalCard'>
					<div className='playerProfile'>
						<img src={image} alt={name} />
						<div className='playerName'>
							<h1 className='name'>
								<u>{name}</u>
							</h1>
							<h1 className='name'>
								<u>#{number}</u>
							</h1>
						</div>
					</div>
					<p>SUB</p>
				</div>
				<Button handleClick={handleClick} handleClick1={handleClick1} />
			</article>
		</>
	);
};

export default HomePlayerOne;
