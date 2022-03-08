import React from 'react'
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import styled from "styled-components"
import { About,Description,Image } from '../styles'

export default function ServicesSection() {
  return (
    <Services>
    <Description>
      <h2>High <span>quality</span> services</h2>
          <Cardss>
            
               <Card>
                 <div className='Icon'>
                   <img alt='icon' src={clock}/>
                   <h3>Lorem</h3>
                   </div> 
                   <p>Lorem ipsum dolor sit amet.</p>
                   
               </Card>
               
               <Card>
               <div className='Icon'>
                   <img alt='icon' src={diaphragm}/>
                   <h3>Lorem</h3>
                   </div>   
                   <p>Lorem ipsum dolor sit amet.</p>
               </Card>   
               <Card>
               <div className='Icon'>
                   <img alt='icon' src={money}/>
                   <h3>Lorem</h3>                   
                   </div>   
                   <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
               <div className='Icon'>
                   <img alt='icon' src={teamwork}/>
                   <h3>Lorem</h3>
                </div>   
                <p>Lorem ipsum dolor sit amet.</p>
               </Card>
            
         </Cardss>
    </Description>
    <Image>
      <img alt='home2' src={home2} />    
    </Image>
    </Services>
  )
}
const Cardss=styled.div`
display:flex;
flex-wrap: wrap;
`;

const Card=styled.div`
flex-basis:20rem;
.Icon{
display:flex;
align-items:center;
h3{
  margin-left:1rem;
  background:white;
  color:black;
  padding:1rem;
}
}
`;
const Services=styled (About)`
h2{
  padding-bottom:5rem;
}
p{
  width:70%;
  padding:2rem 0rem 4rem 0rem;
}
`
