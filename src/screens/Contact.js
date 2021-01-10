import React from "react";
import styled from "styled-components/macro";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import Github from "../assets/logos/github-alt.svg";
import LinkedIn from "../assets/logos/linkedin.svg";
import Letter from "../assets/logos/letter.svg";
import EMail from "../assets/logos/mail.svg";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>🕊 Contact</h2>

      <CardContainer>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img loading="lazy" src={EMail} alt="Mail" />
            Mail
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img loading="lazy" src={Letter} alt="Letter" />
            Letter
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img loading="lazy" src={Github} alt="Github" />
            Github
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img loading="lazy" src={LinkedIn} alt="LinkedIn" />
            LinkedIn
          </a>
        </Card>
      </CardContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled(Container)`
  min-height: 400px;
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    * {
      max-width: 75px;
      margin: 0.5rem;
    }
    a {
      display: flex;
      flex-direction: column;
      overflow-wrap: normal;
    }
    img {
      height: 35px;
      margin: 0.5rem auto 0.75rem;
    }
  }
`;
export default Contact;
