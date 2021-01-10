import React from "react";
import styled from "styled-components";
import DownArrow from "../assets/goDown.svg";
const GoDown = () => {
  return <Down src={DownArrow} alt="Go Down" onClick={() => {}} />;
};
const Down = styled.img`
  height: 3rem;
  transition: all 0.3s ease-in;
  filter: drop-shadow(0 0 2px gold);
  :hover {
    filter: drop-shadow(0 0 6px gold);
  }
`;
export default GoDown;
