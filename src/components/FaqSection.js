import React from 'react'
import styled from "styled-components"
import {About} from "../styles";

export default function FaqSection() {
  return (
    <Faq>
       
      <h2>Any questions <span>FAQ</span></h2>
      <div className="question">
         <h4>How do i start?</h4>
         <div className="answer">
          <p>Lorem ipsum dolor sit damet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, delectus?</p>
         </div>
         <div className="faq-line"> </div>
      </div>
      
      <div className="question">
         <h4>Pricing?</h4>
         <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, unde!</p>
         </div>
         <div className="faq-line"> </div>
      </div>
      <div className="question">
         <h4>How to book?</h4>
         <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, illum!</p>
         </div>
         <div className="faq-line"> </div>
      </div>
      <div className="question">
         <h4>Payment methods?</h4>
         <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, illum!</p>
         </div>
         <div className="faq-line"> </div>
      </div>
    </Faq>
  )
}

const Faq=styled(About)`
display:block;
p{
  padding:0;
}
h4{
  padding-top:1rem;
}

span{
  display:block;
}
.faq-line{
  background:white;
  height:0.2rem;
  margin:2rem 0rem;
  width:100%;
}


`