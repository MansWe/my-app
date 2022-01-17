import React, { Component } from "react";
import styled from "styled-components";
import HeadNameAnim from "./HeadNameAnim";

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
import "../App.css";
var ReactRotatingText = require("react-rotating-text");

library.add(faFacebookF, faLinkedin, faGithub);

const Myheader = (props) => {
  // const LogoWithBorder = styled.div`
  //   text-align: center;
  //   padding-left: 30%;
  //   padding-right: 30%;
  //   padding-top: 10%;
  // `;

  // const ProfilePictureImg = styled.img`
  //   width: 200px;
  //   filter: grayscale(100%);
  //   border-radius: 50%;
  //   padding: 10px;
  //   padding-bottom: 20px;
  //   text-decoration: none;

  //   &:hover {
  //     filter: none;
  //   }
  //   @media (max-width: 768px) {
  //     width: 150px;
  //   }
  // `;

  // const Text = styled.h1`
  //   font-size: 70px;
  //   text-align: center;
  //   color: white;
  //   padding-bottom: 20px;
  //   @media (max-width: 768px) {
  //     font-size: 31px;
  //   }
  // `;

  // const MyMediaListUL = styled.ul`
  //   margin: 0;
  //   padding: 0;
  //   padding-top: 50px;
  //   overflow: hidden;
  //   list-style-type: none;
  // `;
  // const MyMediaListLI = styled.li`
  //   display: inline;
  //   padding: 10%;
  // `;

  // const MyATag = styled.a`
  //   color: grey;

  //   &:hover {
  //     color: white;
  //   }
  // `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    min-height: 800px;
    align-items: center;
    // background-color: #1a1a2e;

    background-color: #404552;
  `;
  const BigText = styled.div`
    display: flex;
    flex-align: center;
    align-items: center;
    height: 100%;
    font-size: 80px;
    @media screen and (max-width: 1000px) {
      font-size: 50px;
    }
    font-weight: 100;
    color: white;
  `;

  return (
    <Container>
      <BigText>
        <HeadNameAnim></HeadNameAnim>
      </BigText>
    </Container>

    // <LogoWithBorder>
    //   <ProfilePictureImg className="" src={img} alt="Image"></ProfilePictureImg>
    //   <Text>Måns Wenning</Text>
    //   <ReactRotatingText
    //     items={["Minimalist", "Web Developer", "Tech-geek"]}
    //     style={{
    //       color: "white",
    //     }}
    //   />
    //   <MyMediaListUL>
    //     <MyMediaListLI>
    //       <MyATag href="https://github.com/MansWe" target="_blank">
    //         <FontAwesomeIcon
    //           icon={["fab", "github"]}
    //           style={{ height: "30px", width: "30px" }}
    //           alt="Github"
    //         />
    //       </MyATag>
    //     </MyMediaListLI>

    //     <MyMediaListLI>
    //       <MyATag
    //         href="https://www.linkedin.com/in/m%C3%A5ns-wenning-b6b82417a/"
    //         target="_blank"
    //       >
    //         <FontAwesomeIcon
    //           icon={["fab", "linkedin"]}
    //           style={{ height: "30px", width: "30px" }}
    //           alt="linkedIn"
    //         />
    //       </MyATag>
    //     </MyMediaListLI>
    //   </MyMediaListUL>
    // </LogoWithBorder>
  );
};
export default Myheader;
