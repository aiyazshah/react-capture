import React from 'react'
import styled from "styled-components"


export default function Movie(props) {
    return (
        <MovieStyle>
            <h1>{props.title}</h1>
            <img src={props.imgSrc} alt="" />
        </MovieStyle>
    )
}
const MovieStyle = styled.div`
margin-top: 3rem;
text-align: center;
h1{
    color: white;
    font-family: cursive;
}
`