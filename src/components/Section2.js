import React, { Component } from "react";
import styled from "styled-components";
import img from "../img/Me.png";
import "../index.css";
import { default as Router, Route } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kthLogo from "../img/KTH_Logo.png";
import dukeLogo from "../img/duke.png";
import StudiesAnim from "./StudiesAnim";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { whileStatement } from "@babel/types";
import EngineeringTeamAnim from "./EngineeringTeamAnim";
var ReactRotatingText = require("react-rotating-text");

library.add(faFacebookF, faLinkedin, faGithub);
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  min-height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   background-color: #2a2a2a;
  //background-color: #0f3460;
  background-color: #4b5162;
`;
const BigText = styled.div`
  display: flex;
  flex-align: center;
  align-items: center;

  font-size: 70px;
  @media screen and (max-width: 1000px) {
    font-size: 6vw;
  }
  font-weight: 200;
  color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Section2() {
  return (
    <Container>
      <BigText>Education</BigText>
      {/* <StudiesAnim></StudiesAnim> */}
      <CardContainer>
        <Card>
          <Img src={kthLogo}></Img>
        </Card>
        <Card>
          <Img src={dukeLogo}></Img>
        </Card>
      </CardContainer>

      {/* <SchoolList>
        <Item>
          <Img src={kthLogo}></Img>
          <Bread>
            GÖR KORT FÖR DESSA FÖR F:n Kungliga Tekniska Högskolan (2020-2025)
            Master's degree Vehicle Technology
          </Bread>
        </Item>
        <Item>
          <ImgDuke src={dukeLogo}></ImgDuke>
          <Bread>
            Duke University (2020-2020) (through Coursera) Java Programming and
            Software Engineering
          </Bread>
        </Item>
      </SchoolList> */}
    </Container>
  );
}

export default Section2;
