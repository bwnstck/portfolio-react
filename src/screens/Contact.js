import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";
import Mail from "../assets/logos/github-alt.svg";
import Github from "../assets/logos/github-alt.svg";
import LinkedIn from "../assets/logos/linkedin.svg";
import Letter from "../assets/logos/letter.svg";
import EMail from "../assets/logos/mail.svg";

const Contact = () => {
  return (
    <ContactContainer>
      <h2>🕊 Contact</h2>
      <div>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img src={EMail} alt="Mail" />
            Mail
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img src={Github} alt="Github" />
            Github
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img src={Letter} alt="Letter" />
            Letter
          </a>
        </Card>
        <Card>
          <a href="mailt:benjamin@weinstock.it">
            <img src={LinkedIn} alt="LinkedIn" />
            LinkedIn
          </a>
        </Card>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled(Container)`
  min-height: 400px;
  div {
    display: flex;
    * {
      margin: auto 1rem;
    }
    a {
      display: flex;
      flex-direction: column;
    }
    img {
      height: 35px;
      margin: 0.5rem auto 0.75rem;
    }
  }
`;
export default Contact;
