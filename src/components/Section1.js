import React, { Component } from "react";
import styled from "styled-components";
import img from "../img/Me.png";
import "../index.css";
import { default as Router, Route } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  flex-direction: column;
  align-items: center;
  min-height: 800px;
  justify-content: center;
  //   background-color: rgb(4, 51, 255);
  //background-color: #16213e;
  background-color: #383c4a;
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

const Bread = styled.div`
  display: flex;
  flex-align: center;
  align-items: center;
`;
function Section1() {
  return (
    <Container>
      <BigText>I help visions come to life with code</BigText>
      <EngineeringTeamAnim></EngineeringTeamAnim>
    </Container>
  );
}

export default Section1;
