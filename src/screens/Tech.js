import styled from "styled-components";
import Card, { CardContainer } from "../components/Card";
import Container from "../components/Container";
import HTML from "../assets/logos/html5.svg";
import CSS from "../assets/logos/css.svg";
import JS from "../assets/logos/js.svg";
import ReactImg from "../assets/logos/react.svg";
import StyledImg from "../assets/logos/styledComponents.png";
import MongoDB from "../assets/logos/mongoDB.svg";
import HeaderImg from "../components/HeaderImg";
import { Computer } from "../assets/emojis";
import GIT from "../assets/logos/git.png";

const Tech = () => {
  const technologies = [
    { name: "HTML", src: HTML },
    { name: "CSS", src: CSS },
    { name: "Javascript", src: JS },
    { name: "React", src: ReactImg },
    { name: "Styled Components", src: StyledImg },
    { name: "mongoDB", src: MongoDB },
    { name: "git workflow", src: GIT },
  ];
  return (
    <TechWrapper primary id="tech">
      <h2>
        <HeaderImg src={Computer} alt="you are" />
        Tech
      </h2>
      <CardContainer>
        {technologies.map((tech) => (
          <Card key={tech.name} scaleTo={1}>
            <TechImg src={tech.src} alt={tech.name} />
            <h5>{tech.name}</h5>
          </Card>
        ))}
      </CardContainer>
    </TechWrapper>
  );
};

const TechWrapper = styled(Container)``;

const TechImg = styled.img`
  height: 75px;
  height: clamp(60px, 10vw, 75px);
  margin: 1rem auto;
`;
export default Tech;
