import React from "react";
import styled from "styled-components/macro";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import GoDown from "../components/GoDown";
import Background from "../assets/background.svg";

const Welcome = () => {
  return (
    <WelcomeWrapper primary>
      <h1>Benjamin Weinstock</h1>
      <p>I design and code beautifully simple things, and I love what I do.</p>
      <Avatar />
      <GoDown />
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled(Container)`
  * {
    margin-bottom: 1rem;
  }
  margin-top: 70px;
  justify-content: center;
  background: url(${Background});
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;
export default Welcome;
