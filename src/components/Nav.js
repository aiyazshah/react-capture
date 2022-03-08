import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    
         <StyledNav>
                <h1><Link id='Logo' to="/">Capture</Link></h1>
                <ul>
                    <li>
                        <Link to="/">1.AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/work">2.Our work</Link>
                    </li>
                    <li>
                        <Link to="/contact">ContactUs</Link>
                    </li>
                </ul>
         </StyledNav>
    
  )
}
const StyledNav=styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
background-color:rgb(28,28,28) ;
margin:auto;
padding:1rem 10rem;

#Logo{
    font-size:2rem;
    font-family:"lobster",cursive;
    font-weight:lighter ;
    color:white;

}

a{
    color:white;
    text-decoration:none ;
   }

ul{
    list-style:none;
    display:flex ;   
}
li{
    padding-right:8rem ;
    position:relative ;
}
`;