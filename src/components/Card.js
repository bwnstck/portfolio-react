import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Card = ({ children }) => {
  Card.propTypes = {
    children: PropTypes.node,
  };
  return <CardWrapper>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 10rem;
  padding: 1rem;

  background-color: var(--text-secondary);
  color: var(--text-primary);

  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;
export default Card;
