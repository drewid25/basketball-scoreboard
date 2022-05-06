import React from "react";

const Score = ({ homescore, awayscore }) => {
  return (
    <section className='score'>
      <div className='btn'>
        <button>1st</button>
        <button>2nd</button>
        <button>3rd</button>
        <button>4th</button>
      </div>

      <div className='scoreContainer'>
        <div className='scoreCard'>
          <h2>Home</h2>
          <h1>{homescore}</h1>
        </div>
        <div className='scoreCard'>
          <h2>Away</h2>
          <h1>{awayscore}</h1>
        </div>
      </div>
      <div className='committeesTable'>
        <div className='committeeHome'>
          <div>
            <h2>Team Foul</h2>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div>
            <h2>TimeOut</h2>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        <div className='committeeAway'>
          <div>
            <h2>Team Foul</h2>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div>
            <h2>TimeOut</h2>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Score;
