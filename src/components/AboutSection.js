import React from 'react'
import home1 from "../img/home1.png"

export default function AboutSection() {
  return (
    <div>
        <div className="description">
         <div className="title">
            <div className="hide">
                <h1>We work to make</h1>
            </div>
            <div className="hide">
                <h2>your <span>dreams </span>come</h2>
            </div>     
            <div className="hide">
            <h2>True</h2>
            </div>
        </div>   
        </div>
        <p>Contact us for any photography or videography ideas that you have, we have professionals with amazing skills</p>
        <button>ContactUs</button>
        <div className="image">
        <img src={home1} alt="home1" />
        </div>
    </div>
  )
}
