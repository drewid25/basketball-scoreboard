import { useState } from "react";

const HomePlayerOne = ({ name, id, image, homescore, setHomeScore }) => {
  const [pts, setPts] = useState(0);
  const [reb, setReb] = useState(0);
  const [ast, setAssist] = useState(0);
  const [stl, setStl] = useState(0);
  const [blk, setBlk] = useState(0);
  const handleClick1 = () => {
    setHomeScore(homescore + 1);
    setPts(pts + 1);
  };
  const handleClick2 = () => {
    setHomeScore(homescore + 2);
    setPts(pts + 2);
  };
  const reboundClick = () => {
    setReb(reb + 1);
  };
  const assistClick = () => {
    setAssist(ast + 1);
  };
  const stlClick = () => {
    setStl(stl + 1);
  };
  const blkClick = () => {
    setBlk(blk + 1);
  };
  if (id === 1) {
    return (
      <>
        <article className='homeplayercard'>
          <div className='playerCard'>
            <div className='personalCard'>
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <h2>#13</h2>
              </div>

              <div>
                <h2>Points:{pts}</h2>
                <h2>Reb:{reb}</h2>
                <h2>Ast:{ast}</h2>
                <h2>Stl:{stl}</h2>

                <h2>Blk:{blk}</h2>
              </div>
            </div>

            <div className='btn-div'>
              <div>
                <button className='btn' onClick={handleClick1}>
                  +1
                </button>
                <button className='btn' onClick={handleClick2}>
                  +2
                </button>
                <button className='btn' onClick={reboundClick}>
                  Reb
                </button>
              </div>
              <div>
                <button className='btn' onClick={assistClick}>
                  Ast
                </button>
                <button className='btn' onClick={stlClick}>
                  Stl
                </button>
                <button className='btn' onClick={blkClick}>
                  BLk
                </button>
              </div>
            </div>
          </div>
        </article>
        <article></article>
      </>
    );
  }
  if (id === 2) {
    return (
      <>
        <article className='homeplayercard'>
          <div className='playerCard'>
            <div className='personalCard'>
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
              </div>

              <div>
                <h2>Points:{pts}</h2>
                <h2>Reb:{reb}</h2>
                <h2>Ast:{ast}</h2>
                <h2>Stl:{stl}</h2>
                <h2>Blk:{blk}</h2>
              </div>
            </div>

            <div className='btn-div'>
              <div>
                <button className='btn' onClick={handleClick1}>
                  +1
                </button>
                <button className='btn' onClick={handleClick2}>
                  +2
                </button>
                <button className='btn' onClick={reboundClick}>
                  Reb
                </button>
              </div>
              <div>
                <button className='btn' onClick={assistClick}>
                  Ast
                </button>
                <button className='btn' onClick={stlClick}>
                  Stl
                </button>
                <button className='btn' onClick={blkClick}>
                  BLk
                </button>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
  if (id === 3) {
    return (
      <>
        <article className='homeplayercard'>
          <div className='playerCard'>
            <div className='personalCard'>
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
              </div>

              <div>
                <h2>Points:{pts}</h2>
                <h2>Reb:{reb}</h2>
                <h2>Ast:{ast}</h2>
                <h2>Stl:{stl}</h2>
                <h2>Blk:{blk}</h2>
              </div>
            </div>

            <div className='btn-div'>
              <div>
                <button className='btn' onClick={handleClick1}>
                  +1
                </button>
                <button className='btn' onClick={handleClick2}>
                  +2
                </button>
                <button className='btn' onClick={reboundClick}>
                  Reb
                </button>
              </div>
              <div>
                <button className='btn' onClick={assistClick}>
                  Ast
                </button>
                <button className='btn' onClick={assistClick}>
                  Stl
                </button>
                <button className='btn' onClick={assistClick}>
                  BLk
                </button>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
  if (id === 4) {
    return (
      <>
        <article className='homeplayercard'>
          <div className='playerCard'>
            <div className='personalCard'>
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
              </div>

              <div>
                <h2>Points:{pts}</h2>
                <h2>Reb:{reb}</h2>
                <h2>Ast:{ast}</h2>
                <h2>Stl:{stl}</h2>

                <h2>Blk:{blk}</h2>
              </div>
            </div>

            <div className='btn-div'>
              <div>
                <button className='btn' onClick={handleClick1}>
                  +1
                </button>
                <button className='btn' onClick={handleClick2}>
                  +2
                </button>
                <button className='btn' onClick={reboundClick}>
                  Reb
                </button>
              </div>
              <div>
                <button className='btn' onClick={assistClick}>
                  Ast
                </button>
                <button className='btn' onClick={assistClick}>
                  Stl
                </button>
                <button className='btn' onClick={assistClick}>
                  BLk
                </button>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
  if (id === 5) {
    return (
      <>
        <article className='homeplayercard'>
          <div className='playerCard'>
            <div className='personalCard'>
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
              </div>

              <div>
                <h2>Points:{pts}</h2>
                <h2>Reb:{reb}</h2>
                <h2>Ast:{ast}</h2>
                <h2>Stl:{stl}</h2>

                <h2>Blk:{blk}</h2>
              </div>
            </div>

            <div className='btn-div'>
              <div>
                <button className='btn' onClick={handleClick1}>
                  +1
                </button>
                <button className='btn' onClick={handleClick2}>
                  +2
                </button>
                <button className='btn' onClick={reboundClick}>
                  Reb
                </button>
              </div>
              <div>
                <button className='btn' onClick={assistClick}>
                  Ast
                </button>
                <button className='btn' onClick={assistClick}>
                  Stl
                </button>
                <button className='btn' onClick={assistClick}>
                  BLk
                </button>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
};

export default HomePlayerOne;
