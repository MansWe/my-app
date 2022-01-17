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
import HelloAnim from "./HelloAnim";
var ReactRotatingText = require("react-rotating-text");
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  min-height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(4, 51, 255);
  background-color: #7c818c;
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
function Section4() {
  return (
    <Container>
      <BigText>
        We should have a&nbsp;
        <ReactRotatingText
          items={["coffee", "meeting", "Zoom-call"]}
          style={{
            color: "white",
            fontWeight: "600",
          }}
        />
      </BigText>
      <HelloAnim></HelloAnim>
    </Container>
  );
}

export default Section4;
