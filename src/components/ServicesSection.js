import React from 'react'
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"

export default function ServicesSection() {
  return (
    <div className='services'>
    <div className="description">
      <h2>High <span>quality</span> services</h2>
          <div className="cards">
            <div className="card">
               <div className="icon">
                   <img alt='icon' src={clock}/>
                   <h3>Efficient</h3>
               </div>
               <div className="card">
               <div className="icon">
                   <img alt='icon' src={diaphragm}/>
                   <h3>efficient</h3>
               </div>   
               </div>
               <div className="card">
               <div className="icon">
                   <img alt='icon' src={money}/>
                   <h3>Affordable</h3>
               </div>
               </div>
               <div className="card">
               <div className="icon">
                   <img alt='icon' src={teamwork}/>
                   <h3>efficient</h3>
               </div>
               </div>
            </div>
         </div>
    </div>
    <div className="image">
      <img alt='home2' src={home2} />    
    </div>
    </div>
  )
}
