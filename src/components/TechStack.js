import React, { Component, useState } from "react";
import styled from "styled-components";
import img from "../img/Me.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faKeybase
} from "@fortawesome/free-brands-svg-icons";
import { whileStatement } from "@babel/types";

var ReactRotatingText = require("react-rotating-text");

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

const TechStack = props => {
  //Hook for handling which stack has been selected by user
  const [CurrentStack, setCurrentStack] = useState("Technologies (hover)");
  // /Hook

  const SortElement = styled.div`
    text-align: center;
    padding-top: 20%;
    @media (max-width: 1500px) {
      padding-top: 5%;
    }
    @media (max-width: 768px) {
      padding-top: 20%;
    }
  `;
  const HeaderStack = styled.h5`
    color: grey;
    padding-bottom: 20px;
    text-decoration: underline;
  `;

  const StackUL = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: inline;
    @media (max-width: 768px) {
      padding-top: 500px;
    }
  `;

  const ListItem = styled.li`
    display: inline;
    padding: 20px;

    @media (max-width: 768px) {
      display: block;
    }
    &:hover {
      color: ${props => (props.item == "java" ? "red" : "")};
      color: ${props => (props.item == "js" ? "#F0DB4F" : "")};
      color: ${props => (props.item == "react" ? "#61dbfb" : "")};
      color: ${props => (props.item == "node" ? "#68A063" : "")};
      color: ${props => (props.item == "html" ? "#E44D26" : "")};
      color: ${props => (props.item == "css" ? "#264de4" : "")};
    }
  `;
  const Paragraph = styled.p`
    font-size: 15px;
    color: grey;
    left: 30%;
    right: 30%;
    padding-top: 5px;
    text-align: center;

    @media (max-width: 768px) {
      padding-right: 20px;
      padding-left: 20px;
    }
  `;
  const FakeComponent = styled.div``;
  let returnText = "";
  if (CurrentStack === "Java") {
    returnText = `
        Helped two of Hitta.se's biggest customers get all of their offices on
        Hitta, scraped with Java and Jsoup. The scraping was automated in Jenkins and runs every month.`;
  }
  if (CurrentStack === "Technologies" || CurrentStack === "") {
    returnText = ``;
  }

  if (
    CurrentStack === "Javascript" ||
    CurrentStack === "React" ||
    CurrentStack === "Node.js" ||
    CurrentStack === "HTML" ||
    CurrentStack === "CSS"
  ) {
    returnText = `Built a large scale web application, with the purpose 
                  of handling and managing data on the site. 
                  The web application was connected to Hitta.se's backend`;
  }

  return (
    <SortElement>
      <HeaderStack>{CurrentStack}</HeaderStack>

      <StackUL>
        <ListItem
          item="java"
          onMouseEnter={() => setCurrentStack("Java")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          {" "}
          <FontAwesomeIcon
            icon={["fab", "java"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>
        <ListItem
          item="js"
          onMouseEnter={() => setCurrentStack("Javascript")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          {" "}
          <FontAwesomeIcon
            icon={["fab", "js"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>
        <ListItem
          item="react"
          onMouseEnter={() => setCurrentStack("React")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          {" "}
          <FontAwesomeIcon
            icon={["fab", "react"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>
        <ListItem
          item="node"
          onMouseEnter={() => setCurrentStack("Node.js")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          <FontAwesomeIcon
            icon={["fab", "node"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>

        <ListItem
          item="html"
          onMouseEnter={() => setCurrentStack("HTML")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          {" "}
          <FontAwesomeIcon
            icon={["fab", "html5"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>
        <ListItem
          item="css"
          onMouseEnter={() => setCurrentStack("CSS")}
          onMouseLeave={() => setCurrentStack("Technologies")}
        >
          <FontAwesomeIcon
            icon={["fab", "css3"]}
            style={{ height: "30px", width: "30px" }}
          />
        </ListItem>
      </StackUL>
      <Paragraph>{returnText}</Paragraph>
      <FakeComponent></FakeComponent>
    </SortElement>
  );
};
export default TechStack;
