import React from 'react'
import styled from 'styled-components'
import home1 from "../img/home1.png"
import { About, Description, Hide, Image } from "../styles.js"


export default function AboutSection() {
  return (
    <About>
      <Description>
        <Hide>
          <h1>We work to make</h1>
        </Hide>
        <Hide>
          <h2>your <span>dreams </span>come</h2>
        </Hide>
        <Hide>
          <h2>True</h2>
        </Hide>
        <p>Contact us for any photography or videography ideas that you have, we have professionals with amazing skills</p>
        <button>ContactUs</button>
      </Description>

      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  )
}


//
