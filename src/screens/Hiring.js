import React from "react";
import styled from "styled-components/macro";
import Container from "../components/Container";
import CV from "../assets/BWeinstockCV2020.pdf";
const Hiring = () => {
  return (
    <Container id="cv">
      <h2>👩‍🎤 hiring?</h2>
      <p>Get my CV!</p>
      <Download href={CV} target="_blank">
        Download
      </Download>
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
  transition: all 1s ease-in-out;
  text-decoration: underline 1px solid transparent;
  &&:hover {
    text-decoration: underline 1px solid gold;
  }
`;
export default Hiring;
