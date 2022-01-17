import React, { Component } from "react";
import styled from "styled-components";
import img from "../img/Me.png";
import "../index.css";
import "../App.css";
import { default as Router, Route } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kthLogo from "../img/KTH_Logo.png";
import dukeLogo from "../img/duke.png";
import StudiesAnim from "./StudiesAnim";
import { useState } from "react";
import { whileStatement } from "@babel/types";
import EngineeringTeamAnim from "./EngineeringTeamAnim";
import hitta from "../img/hitta.png";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  faJava,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faNode,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebookF,
  faLinkedin,
  faGithub,
  faJava,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faNode,
  faKeybase
);

var ReactRotatingText = require("react-rotating-text");

// /Hook

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  min-height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  background-color: #e94560;
  background-color: #5294e2;
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
function Section3() {
  const [CurrentStack, setCurrentStack] = useState("Technologies (hover)");

  const SortElement = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    padding-top: 50px;
  `;
  const HeaderStack = styled.h5`
    color: grey;
    padding-bottom: 20px;
    text-decoration: underline;
  `;

  const StackDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const ListItem = styled.div`
    display: flex;

    padding: 20px;

    border-radius: 4px;
    transition: 0.2s;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      background-color: black;
      color: ${(props) => (props.item == "java" ? "red" : "")};
      color: ${(props) => (props.item == "js" ? "#F0DB4F" : "")};
      color: ${(props) => (props.item == "react" ? "#61dbfb" : "")};
      color: ${(props) => (props.item == "node" ? "#68A063" : "")};
      color: ${(props) => (props.item == "html5" ? "#E44D26" : "")};
      color: ${(props) => (props.item == "css3" ? "#264de4" : "")};
    }
  `;
  const WorkImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const WorkImg = styled.img`
    width: 100px;
    height: 100px;
    @media screen and (max-width: 1000px) {
      width: 60px;
      height: 60px;
    }
  `;

  const myArr = ["java", "js", "react", "node", "html5", "css3"];
  return (
    <Container>
      <BigText>Experience and Technologies</BigText>
      <SortElement>
        <WorkImgDiv>
          <WorkImg src={hitta}></WorkImg>
        </WorkImgDiv>
        <StackDiv>
          {myArr.map((elem) => (
            <ListItem
              item={elem}
              onMouseEnter={() => setCurrentStack({ elem })}
              onMouseLeave={() => setCurrentStack("Technologies")}
            >
              <FontAwesomeIcon
                class="styleFontAwesome"
                icon={["fab", elem]}
                style={{ height: "40px", width: "40px" }}
              />
            </ListItem>
          ))}
        </StackDiv>
      </SortElement>
    </Container>
  );
}

export default Section3;
