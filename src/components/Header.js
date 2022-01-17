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

var ReactRotatingText = require("react-rotating-text");

library.add(faFacebookF, faLinkedin, faGithub);

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  top: 0;
  color: white;
  position: fixed;
  width: 100%;
  padding: 50px;
  align-content: space-between;
`;
const LeftIcon = styled.div`
  position: absolute;
  left: 50px;
  top: 50px;
  //   display: flex;
  //   align-self: flex-start;
`;

const RightIcon = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  display: flex;
  align-self: flex-end;
`;

const IconLink = styled.a`
  color: white;

  &:hover {
    color: gray;
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <LeftIcon>
        <IconLink href="https://github.com/MansWe" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{ height: "40px", width: "40px" }}
            alt="Github"
          />
        </IconLink>
      </LeftIcon>

      <RightIcon>
        <IconLink
          href="https://www.linkedin.com/in/m%C3%A5ns-wenning-b6b82417a/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{ height: "40px", width: "40px" }}
            alt="linkedIn"
          />
        </IconLink>
      </RightIcon>
    </HeaderDiv>
  );
}

export default Header;

{
  /* <MyMediaListUL>
//     <MyMediaListLI>
//       <MyATag href="https://github.com/MansWe" target="_blank">
//         <FontAwesomeIcon */
}
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
