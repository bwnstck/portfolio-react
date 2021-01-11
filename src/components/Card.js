import styled from "styled-components/macro";

const Card = styled.div`
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
  transition: var(--transition);

  :hover {
    transform: ${(props) => `scale(${props.scaleTo ? props.scaleTo : "1.1"})`};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  > * {
    margin: auto 1rem 1rem;
    flex: 0 1 18rem;
    margin: 0.5rem;
  }
`;

export default Card;
