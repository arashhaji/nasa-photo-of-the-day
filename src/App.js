import React from "react";
import ImgCard from "./components/ImgCard.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


import styled from "styled-components";


const H1 = styled.h1`
  font-size: 65px;
  max-witdth: 800px;
  color: white;
  font-family: The Wild Hammers;
  background-color: black;
  padding: 3%;
  margin-top: 1%;
  border: 1.5px solid white;
  box-shadow: 5px 5px 5px slategray;
  `

  const Border = styled.p`
    font-size: 14px;
    padding:2%;
    background-color: black;
    color: white;
    align-text: center;
    border: .5px solid white;
    box-shadow: 5px 5px 5px 5px slategray;
    `;

    


function App() {
return (
  <div className = "App">
    <H1>Nasa Image of the Day</H1>
   <ImgCard />
   <div className = "border">
     <Border>Copyright Nasa 2019 | All Rights Reserved</Border>
   </div>
    </div>   

  );
}

export default App;
