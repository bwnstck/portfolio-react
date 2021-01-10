import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Container = styled.div`
  > * :not(:first-child) {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: "100%";
  padding: 4rem 0rem;
  background: ${(props) =>
    props.primary ? "var(--primary)" : "var(--secondary)"};

  color: ${(props) =>
    props.primary ? "var(--text-primary)" : "var(--text-secondary)"};
`;

Container.propTypes = {
  primary: PropTypes.bool,
};

export default Container;
