import styled from "styled-components/macro";
import Card from "../components/Card";
import Container from "../components/Container";
import HTML from "../assets/logos/html5.svg";
import CSS from "../assets/logos/css.svg";
import JS from "../assets/logos/js.svg";
import ReactImg from "../assets/logos/react.svg";
import StyledImg from "../assets/logos/styledComponents.png";
import MongoDB from "../assets/logos/mongoDB.svg";

const Tech = () => {
  return (
    <TechWrapper primary>
      <h2>💻 Tech</h2>
      <CardContainer>
        <TechBox>
          <TechImg src={HTML} alt="HTML" />
          <h5>HTML</h5>
        </TechBox>
        <TechBox>
          <TechImg src={CSS} alt="HTML" />
          <h5>CSS</h5>
        </TechBox>
        <TechBox>
          <TechImg src={JS} alt="HTML" />
          <h5>Javascript</h5>
        </TechBox>
        <TechBox>
          <TechImg src={ReactImg} alt="HTML" />
          <h5>React</h5>
        </TechBox>
        <TechBox>
          <TechImg src={StyledImg} alt="HTML" />
          <h5>Styled Components</h5>
        </TechBox>
        <TechBox>
          <TechImg src={MongoDB} alt="HTML" />
          <h5>mongoDB</h5>
        </TechBox>
      </CardContainer>
    </TechWrapper>
  );
};

const TechWrapper = styled(Container)``;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    width: 18rem;
    margin: auto 1rem 1rem;
    flex: 0 1 18rem;
    margin: 5px;
  }
`;

const TechBox = styled(Card)``;
const TechImg = styled.img`
  height: 100px;
  margin: 1rem auto;
`;
export default Tech;
