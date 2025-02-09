import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  min-height: ${(props) => (props.fullHeight ? "100vh" : "400px")};
  padding: 4rem 0rem;
  background: ${(props) =>
    props.primary ? "var(--primary)" : "var(--secondary)"};

  color: ${(props) =>
    props.primary ? "var(--text-primary)" : "var(--text-secondary)"};
  scroll-margin-top: 70px;
`;

Container.propTypes = {
  primary: PropTypes.bool,
};

export const TextContainer = styled.div`
  max-width: 82ch;
  padding: 0 2rem;
  text-align: center;
`;

export default Container;
