import React from "react";
import styled from "styled-components/macro";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import DispoDisco from "../assets/dispodisco.png";
import GoBang from "../assets/playgobang.png";
import RealDecide from "../assets/realdecide.png";
import Vulvemory from "../assets/vulvemory.png";

const Projects = () => {
  const projects = [
    {
      title: "= DispoDisco =-",
      sub: "App for bike messengers",
      type: "Capstone Project 2020 ",
      link: "https://neuefische.de",
      linkText: "@neuefische",
      depl: "https://dispodisco.herokuapp.com",
      github: "https://github.com/DiscoDevs/DispoDisco",
      src: DispoDisco,
    },
    {
      title: "= GoBang =-",
      sub: "digital version of the small 'Go'-Game",
      type: "Hobby Project 2020",
      depl: "https://playgobang.vercel.app",
      github: "https://github.com/bwnstck/gobang",
      src: GoBang,
    },
    {
      title: "= realDecide =-",
      sub: "localStorage Version of wheeldecide",
      type: "Hobby Project 2020",
      depl: "https://realdecide.vercel.app",
      github: "https://github.com/bwnstck/realdecide",
      src: RealDecide,
    },
    {
      title: "= Vulvemory =-",
      sub: "a simple memory Game",
      type: "Hobby Project 2020",
      depl: "https://vulvemory.vercel.app",
      github: "https://github.com/verdruckt/vulvemory",
      src: Vulvemory,
    },
  ];
  return (
    <Container id="projects" fullHeight>
      <h2>🕹 Projects</h2>
      <CardContainer>
        {projects.map((project) => (
          <Project key={project.title} scaleTo={1.02}>
            <img loading="lazy" src={project.src} alt={project.title} />
            <ShaderLayer />
            <div>
              <h4>{project.title}</h4>
              <p>{project.sub}</p>
              <InfoContainer>
                <span>{project.type}</span>
                {project.link && <a href={project.link}>{project.linkText}</a>}
              </InfoContainer>
              <LinkContainer>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={project.depl} target="_blank" rel="noreferrer" d>
                  Deployment
                </a>
              </LinkContainer>
            </div>
          </Project>
        ))}
      </CardContainer>
    </Container>
  );
};
const ShaderLayer = styled.div`
  transition: var(--transition);
  background-color: rgba(0, 0, 0, 0.5);
`;
const Project = styled(Card)`
  flex: 0 1 600px;
  margin: 1rem;
  position: relative;
  padding: 0;
  width: clamp(330px, 40vw, 600px);
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
  bottom: 20%;
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  > :first-child {
    margin-right: 1rem;
  }
`;
export default Projects;
