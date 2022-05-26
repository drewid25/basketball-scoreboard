import { useState } from "react";

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
          <div className='playerStats'>
            <img src={image} alt={name} />
            <h1 className='name'>
              <u>{name}</u>
            </h1>
            <h1 className='name'>
              <u>#{number}</u>
            </h1>
            <h1>Pts: {pts}</h1>
            <h1>Reb: {reb}</h1>
            <h1>Ast: {ast}</h1>
            <h1>Stl: {stl}</h1>
            <h1>Blk: {blk}</h1>
          </div>
          <div className='btn-div'>
            <div>
              <h2>Points</h2>
              <div>
                <button className='btn' onClick={handleClick("pts")}>
                  +1
                </button>
                <button className='btn' onClick={handleClick1("pts")}>
                  -1
                </button>
              </div>
              <div>
                <h2>Rebound</h2>
                <button className='btn' onClick={handleClick("reb")}>
                  +1
                </button>
                <button className='btn' onClick={handleClick1("reb")}>
                  -1
                </button>
              </div>
              <div>
                <h2>Assist</h2>
                <button className='btn' onClick={handleClick("ast")}>
                  +1
                </button>
                <button className='btn' onClick={handleClick1("ast")}>
                  -1
                </button>
              </div>
              <div>
                <h2>Steal</h2>
                <button className='btn' onClick={handleClick("stl")}>
                  +1
                </button>
                <button className='btn' onClick={handleClick1("stl")}>
                  -1
                </button>
              </div>
              <div>
                <h2>Block</h2>
                <button className='btn' onClick={handleClick("blk")}>
                  +1
                </button>
                <button className='btn' onClick={handleClick1("blk")}>
                  -1
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomePlayerOne;
