import React from "react";
import styled from "styled-components/macro";
import Avatar from "../components/Avatar";
import Container, { TextContainer } from "../components/Container";
import GoDown from "../components/GoDown";
import Background from "../assets/background.svg";
import { Ninja, Rainbow, TreckieHand } from "../assets/emojis";

const Welcome = () => {
  return (
    <WelcomeWrapper primary id="welcome">
      <TextContainer>
        <h1>Benjamin Weinstock</h1>
        <p>
          <img src={Rainbow} alt="Rainbow" /> Web Developer, Tinkerer,
          Solutioner <img src={TreckieHand} alt="Hello" />{" "}
        </p>
      </TextContainer>
      <Avatar />
      <p>
        ... always up for an adventure! <img src={Ninja} alt="Ninja" />
      </p>
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
    img {
      height: 20px;
      margin: 0;
    }
  }
`;
export default Welcome;
