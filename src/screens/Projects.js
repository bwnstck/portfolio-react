import React from "react";
import styled from "styled-components/macro";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import DispoDisco from "../assets/dispodisco.png";
import GoBang from "../assets/playgobang.png";
import RealDecide from "../assets/realdecide.png";
import Vulvemory from "../assets/vulvemory.png";

const Projects = () => {
  return (
    <Container id="projects" fullHeight>
      <h2>🕹 Recent Projects</h2>
      <CardContainer>
        <StyledLink href="/#" target="_blank">
          <Project>
            <img loading="lazy" src={DispoDisco} alt="GoBang" />
            <div>
              <h4>-= DispoDisco =-</h4>
              <p>Digital version of the "Go"-Game</p>
              <p>Hobby Project 2020</p>
            </div>
          </Project>
        </StyledLink>
        <StyledLink href="/#" target="_blank">
          <Project>
            <img loading="lazy" src={GoBang} alt="GoBang" />
            <div>
              <h4>-= GoBang =-</h4>
              <p>Digital version of the "Go"-Game</p>
              <p>Hobby Project 2020</p>
            </div>
          </Project>
        </StyledLink>
        <StyledLink href="/#" target="_blank">
          <Project>
            <img loading="lazy" src={RealDecide} alt="GoBang" />
            <div>
              <h4>-= RealDecide =-</h4>
              <p>Digital version of the "Go"-Game</p>
              <p>Hobby Project 2020</p>
            </div>
          </Project>
        </StyledLink>
        <StyledLink href="/#" target="_blank">
          <Project>
            <img loading="lazy" src={Vulvemory} alt="GoBang" />
            <div>
              <h4>-= Vulvemory =-</h4>
              <p>Digital version of the "Go"-Game</p>
              <p>Hobby Project 2020</p>
            </div>
          </Project>
        </StyledLink>
      </CardContainer>
    </Container>
  );
};

const Project = styled(Card)`
  flex: 0 1 15rem;
  position: relative;
  padding: 0;
  width: clamp(330px, 40vw, 600px);
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    filter: blur(5px);
  }
  div {
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
    h4 {
      text-shadow: 0 0 #f4166e;
      transition: all 0.5s ease-in-out;
    }
  }
`;
const StyledLink = styled.a`
  flex: 0 1 25rem;
  margin: 1rem;
  color: #c77da2;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &&:hover {
    transform: scale(1.05);
    text-decoration: none;
    h4 {
      text-shadow: 0 3px var(--action);
    }
  }
`;
export default Projects;
