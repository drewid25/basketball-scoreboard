import React from 'react';

const Button = ({ handleClick, handleClick1 }) => {
	return (
		<div className='btn-div'>
			<div>
				<h2>Points</h2>
				<div className='stats-btn'>
					<button className='btn' onClick={handleClick('pts')}>
						+
					</button>
					<button className='btn' onClick={handleClick1('pts')}>
						-
					</button>
				</div>
			</div>
			<div>
				<h2>Rebound</h2>
				<div className='stats-btn'>
					<button className='btn' onClick={handleClick('reb')}>
						+
					</button>
					<button className='btn' onClick={handleClick1('reb')}>
						-
					</button>
				</div>
			</div>
			<div>
				<h2>Assist</h2>
				<div className='stats-btn'>
					<button className='btn' onClick={handleClick('ast')}>
						+
					</button>
					<button className='btn' onClick={handleClick1('ast')}>
						-
					</button>
				</div>
			</div>
			<div>
				<h2>Steal</h2>
				<div className='stats-btn'>
					<button className='btn' onClick={handleClick('stl')}>
						+
					</button>
					<button className='btn' onClick={handleClick1('stl')}>
						-
					</button>
				</div>
			</div>
			<div>
				<h2>Block</h2>
				<div className='stats-btn'>
					<button className='btn' onClick={handleClick('blk')}>
						+
					</button>
					<button className='btn' onClick={handleClick1('blk')}>
						-
					</button>
				</div>
			</div>
		</div>
	);
};

export default Button;
