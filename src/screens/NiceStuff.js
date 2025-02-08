import React from "react";
import styled from "styled-components";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import PWPush from "../assets/pwpush_bgrnd.png";
import Etherpad from "../assets/etherpad_bgrnd.png";
import HeaderImg from "../components/HeaderImg";
import { GearIcon } from "../assets/emojis";

const NiceStuff = () => {
  const niceStuff = [
    {
      title: "PW-Push",
      sub: "A tool for securely send text or passwords",
      type: "",
      link: "https://pwpush.weinstock.it",
      linkText: "PW-Push",
      src: PWPush,
    },
    {
      title: "Etherpad",
      sub: "Online-Live-Editor",
      type: "",
      link: "https://pad.weinstock.it",
      linkText: "Etherpad",
      src: Etherpad,
    },

  ];
  return (
    <Container primary id="services" >
      <h2>
        <HeaderImg src={GearIcon} alt="Joystick" /> Services
      </h2>
      <CardContainer>
        {niceStuff.map((service) => (
          <NiceStuffContainer key={service.title} scaleTo={1.02}>
            <img loading="lazy" src={service.src} alt={service.title} />
            <ShaderLayer />
            <div>
              <h4>{service.title}</h4>
              <p>{service.sub}</p>
              <InfoContainer>
                <span>{service.type}</span>
                {service.link && <a href={service.link}>{service.linkText}</a>}
              </InfoContainer>

            </div>
          </NiceStuffContainer>
        ))}
      </CardContainer>
    </Container>
  );
};
const ShaderLayer = styled.div`
  transition: var(--transition);
  background-color: rgba(0, 0, 0, 0.5);
`;
const NiceStuffContainer = styled(Card)`
  flex: 0 1 400px;
  margin: 1rem;
  position: relative;
  padding: 0;
  width: clamp(330px, 40vw, 400px);
  &&:hover {
    > :nth-child(2) {
      background-color: rgba(0, 0, 0, 0);
    }
    img {
      filter: blur(4px);
    }
    h4 {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    filter: blur(5px);
  }

  > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    padding-bottom: 2rem;
    border-radius: calc(0.25rem - 1px);
    filter: drop-shadow(0 0 6px black);
    h4 {
      text-shadow: 0 0 #f4166e;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 10%;
`;


export default NiceStuff;
