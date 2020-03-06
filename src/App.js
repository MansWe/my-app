import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import ParticleAnimation from "react-particle-animation";
import Myheader from "./components/headerName";
import TechStack from "./components/TechStack";

const App = props => {
  let OrganizeComponents = styled.div``;
  const FixFooter = styled.div`
    text-align: center;
    bottom: 10%;
    width: 100%;
    position: relative;

    @media (max-width: 768px) {
      position: relative;
    }
  `;

  return (
    <div>
      <OrganizeComponents>
        <Myheader></Myheader>
        <FixFooter>
          <TechStack></TechStack>
        </FixFooter>
      </OrganizeComponents>
    </div>
  );
};

export default App;
