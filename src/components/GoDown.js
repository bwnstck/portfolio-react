import React from "react";
import styled from "styled-components/macro";
import DownArrow from "../assets/goDown.svg";
const GoDown = () => {
  return (
    <>
      <a href="#cv">
        <Down src={DownArrow} alt="Go Down" />
      </a>
    </>
  );
};
const Down = styled.img`
  height: 3rem;
  transition: all 0.3s ease-in;
  cursor: pointer;
  filter: drop-shadow(0 0 6px gold);
  :hover {
    filter: drop-shadow(0 0 6px var(--action));
  }
`;
export default GoDown;
