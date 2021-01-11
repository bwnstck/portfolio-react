import React from "react";
import styled from "styled-components/macro";
import Avatar from "../components/Avatar";
import Container, { TextContainer } from "../components/Container";
import GoDown from "../components/GoDown";
import Background from "../assets/background.svg";

const Welcome = () => {
  return (
    <WelcomeWrapper primary id="outerSpace">
      <TextContainer>
        <h1>Benjamin Weinstock</h1>
        <p>🌈 Web Developer, Tinkerer and Solutioner 🖖 </p>
      </TextContainer>
      <Avatar />
      <p>... always up for an adventure! 🥷🏻</p>
      <GoDown />
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled(Container)`
  * {
    margin-bottom: 1rem;
  }
  margin-top: 70px;
  height: 100vh;
  min-height: 600px;
  justify-content: center;
  background: url(${Background});
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;
export default Welcome;
