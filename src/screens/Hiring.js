import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

const Hiring = () => {
  return (
    <Container>
      <h2>👩‍🎤 hiring?</h2>
      <p>Get my CV!</p>
      <Download href="./assets/BWeinstockCV2020.pdf" target="_blank">
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
