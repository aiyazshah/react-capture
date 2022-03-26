import React from 'react'
import styled from 'styled-components'
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'
import Movie from '../components/Movie.js'


export default function OurWork() {
  return (
    <OurworkStyle>
      <Movie imgSrc={athlete} title="The athlete" />
      <Movie imgSrc={theracer} title="The Racer" />
      <Movie imgSrc={goodtimes} title="goodtimes" />
    </OurworkStyle>

  )
}

const OurworkStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`