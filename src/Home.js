import React, { useState } from 'react'

const Home = ({homeplayers,setHomePlayers,homescore,setHomeScore}) => {
  
  return (
    <>
        <section>
           
            {homeplayers.map((players)=>{
                const {name,image,id} =players
                let playerScore = 0
                const handleClick1=()=>{
                    setHomeScore(homescore+1)
                     playerScore+=1
                     return playerScore
                }
                
                 const handleClick2=()=>{
                    setHomeScore(homescore+2)
                
                }
                return<>
                <article>
                <div key={id} className='playerCard'>
                <img src={image} alt={name} />
                 <button className="btn" onClick={handleClick1}>+1</button>
                 <button className="btn"onClick={handleClick2}>+2</button>
                 
                </div>
                <h4>score:{playerScore}</h4>
                </article>
                
                
                 </>
                 
               
            })}
        </section>
    </>
  )
}

export default Home