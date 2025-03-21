import React from "react";
import styled from "styled-components";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import Github from "../assets/logos/github-alt.svg";
import LinkedIn from "../assets/logos/linkedin.svg";
import Letter from "../assets/logos/letter.svg";
import EMail from "../assets/logos/mail.svg";
import HeaderImg from "../components/HeaderImg";
import { Dove } from "../assets/emojis";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>
        <HeaderImg src={Dove} alt="Dove" /> Contact
      </h2>

      <CardContainer>
        <Card>
          <a href="mailto:benjamin[aet]weinstock[punkt]it">
            <img loading="lazy" src={EMail} alt="Mail" />
            Mail
          </a>
        </Card>
        {/* <Card
          onClick={() => {
            alert("bwnstck");
          }}
        >
          <a href="#contact">
            <img loading="lazy" src={Letter} alt="Letter" />
            Letter
          </a>
        </Card> */}
        <Card>
          <a href="https://github.com/bwnstck" target="_blank" rel="noreferrer">
            <img loading="lazy" src={Github} alt="Github" />
            Github
          </a>
        </Card>
        <Card>
          <a
            href="https://www.linkedin.com/in/bweinstock/"
            target="_blank"
            rel="noreferrer"
          >
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
