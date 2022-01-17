import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import ParticleAnimation from "react-particle-animation";
import Myheader from "./components/headerName";
import TechStack from "./components/TechStack";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
const App = (props) => {
  let OrganizeComponents = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
  `;
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
        <Header />
        <Myheader />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        {/* <FixFooter>
          <TechStack></TechStack>
        </FixFooter> */}
      </OrganizeComponents>
    </div>
  );
};

export default App;
