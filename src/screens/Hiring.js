import React from "react";
import styled from "styled-components/macro";
import Container from "../components/Container";
import CV from "../assets/BWeinstockCV2020.pdf";
import HeaderImg from "../components/HeaderImg";
import { Superhero } from "../assets/emojis";
const Hiring = () => {
  return (
    <Container id="cv">
      <h2>
        <HeaderImg src={Superhero} alt="you are" />
         hiring?
      </h2>
      <Download href={CV} target="_blank">
        Get my CV!
      </Download>
      <p>
        and write me an <a href="#contact">email</a>
      </p>
    </Container>
  );
};

const Download = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  padding: 1rem;
  background-color: var(--action);
  border-radius: 6px;
  transition: var(--transition);
  transition: var(--transition);
  text-decoration: underline 1px solid transparent;
  &&:hover {
    text-decoration: underline 1px solid gold;
    transform: scale(1.1);
  }
`;
export default Hiring;
