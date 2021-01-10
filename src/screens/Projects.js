import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";
import DispoDisco from "../assets/dispodisco.png";
import GoBang from "../assets/playgobang.png";
import RealDecide from "../assets/realdecide.png";
import Vulvemory from "../assets/vulvemory.png";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>🕹 Recent Projects</h2>
      <a href="https://dispodisco.herokuapp.com/" target="_blank">
        <ProjectCard>
          <img
            loading="lazy"
            src={DispoDisco}
            class="card-img"
            alt="DispoDisco"
          />
          <ImgOverlay>
            <h5>Dispo Disco</h5>
            <p>App for BikeMessengers</p>
            <p>Final Project @neueFische Cologne 2020</p>
          </ImgOverlay>
        </ProjectCard>
      </a>
      <a href="https://dispodisco.herokuapp.com/" target="_blank">
        <ProjectCard>
          <img loading="lazy" src={GoBang} class="card-img" alt="DispoDisco" />
          <ImgOverlay>
            <h5>Dispo Disco</h5>
            <p>App for BikeMessengers</p>
            <p>Final Project @neueFische Cologne 2020</p>
          </ImgOverlay>
        </ProjectCard>
      </a>
      <a href="https://dispodisco.herokuapp.com/" target="_blank">
        <ProjectCard>
          <img
            loading="lazy"
            src={RealDecide}
            class="card-img"
            alt="DispoDisco"
          />
          <ImgOverlay>
            <h5>Dispo Disco</h5>
            <p>App for BikeMessengers</p>
            <p>Final Project @neueFische Cologne 2020</p>
          </ImgOverlay>
        </ProjectCard>
      </a>
      <a href="https://dispodisco.herokuapp.com/" target="_blank">
        <ProjectCard>
          <img
            loading="lazy"
            src={Vulvemory}
            class="card-img"
            alt="DispoDisco"
          />
          <ImgOverlay>
            <h5>Dispo Disco</h5>
            <p>App for BikeMessengers</p>
            <p>Final Project @neueFische Cologne 2020</p>
          </ImgOverlay>
        </ProjectCard>
      </a>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled(Container)`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
`;
const ProjectCard = styled(Card)`
  background: none;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  margin-top: var(--bs-gutter-y);
  flex: 0 0 auto;
  width: 50%;

  && * {
    flex-shrink: 0;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }
  img {
    filter: blur(5px);
  }
  h5 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 1rem auto 1.5rem;
    max-width: 30ch;
  }
`;

const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
`;
