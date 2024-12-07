import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
// import CV from "../assets/BWeinstockCV2020.pdf";
import HeaderImg from "../components/HeaderImg";
import { Superhero } from "../assets/emojis";
import AmbientLogo from "../assets/logos/ambient-logo.svg";

const Hiring = () => {
  return (
    <Wrapper id="cv">
      <h2>
        <HeaderImg src={Superhero} alt="Hiring Superhero" />
         hiring?
      </h2>
      <p>
        ... for now iam happy at
        <Ambient
          href="https://ambient.digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AmbientLogo} alt="Ambient Digital Logo" />
          mbient Digital
        </Ambient>
      </p>
      <span>Still interested? ;)</span>
      {/* <Download href={CV} target="_blank">
        <span>Get my CV!</span>
      </Download> */}
      <span>Version: Jan 2020</span>
      <p>
        and write me an <a href="#contact">email</a>
      </p>
    </Wrapper>
  );
};

const Ambient = styled.a`
  img {
    height: 2rem;
    transform: translateY(2px);
    margin: auto 0.1rem auto 0.5rem;
  }
  color: var(--text-secondary);
`;
const Wrapper = styled(Container)`
  > :last-child > a {
    /* filter: drop-shadow(0px 0px 2px rgba(11, 44, 12, 0.8)); */
  }
`;
const Download = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  padding: 1rem;
  background-color: var(--action);
  border-radius: 6px;
  transition: var(--transition);
  transition: var(--transition);
  text-decoration: underline 1px solid transparent;
  span,
  p {
    /* filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7)); */
  }
  &&:hover {
    text-decoration: underline 1px solid gold;
    transform: scale(1.1);
  }
`;
export default Hiring;
