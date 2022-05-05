import React, { useState } from 'react'

const Home = ({homeplayers,setHomePlayers,homescore,setHomeScore}) => {
    const [playerscore,setPlayerScore]=useState(0)
  return (
    <div>
        <article>
            
            {homeplayers.map((players)=>{
                const {name,image,id} =players
               
                const handleClick1=()=>{
                    setHomeScore(homescore+1)
                    setPlayerScore(playerscore+1)
                }
                 const handleClick2=()=>{
                    setHomeScore(homescore+2)
                    setPlayerScore(playerscore+2)
                }
                return<>
                <div key={id} className='playerCard'>
                <img src={image} alt={name} />
                 <button className="btn" onClick={handleClick1}>+1</button>
                 <button className="btn"onClick={handleClick2}>+2</button>
                 <h4>score:{playerscore}</h4>
                </div>
                
                 </>
                 
               
            })}
        </article>
    </div>
  )
}

export default Home