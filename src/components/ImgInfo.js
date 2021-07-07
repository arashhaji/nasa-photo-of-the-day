import React from "react";
import styled from "styled-components";


const WrapperDiv = styled.div`
    font-family: The Wild Hammer;
    text-align: center;
`;


const InfoImg = styled.img`
    width: 50%;
    height: 50%;
    padding:1%;
    background-color: white;
    border: 1px solid black;
    border-radius: 2%;
    margin-bottom: 2%;
    box-shadow: 10px 10px 10px slategray;
    `;

    const H1 = styled.h1`
    font-size: 30px;
    margin-top:2%;
    `;

    const Info = styled.p`
    font-size: 16px;
    width: 75%;
    text-align: center;
    font-weight: bold;
    margin-left:12%;
    padding: 3%;
    border: .5px dotted slategray;
    `;
    

    const H3 = styled.h3`
    font-family: The Wild Hammers;
    font-weight: bold;
    `
const ImgInfo = props => {
    return (
        <WrapperDiv>
        <div>
            <H1>{props.title}</H1>
            <H3>{props.day}</H3>
            <InfoImg src={props.image} alt="Space"/>
            <Info>{props.text}</Info>
        </div>
        </WrapperDiv>
    )
}

export default ImgInfo; 