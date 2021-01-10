import React from "react";
import styled from "styled-components";
import AvatarPic from "../assets/img/profilePic.svg";

const Avatar = () => {
  return <AvatarWrapper src={AvatarPic} alt="Avatar" />;
};
const AvatarWrapper = styled.img`
  background-color: rebeccapurple;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid gold;
`;
export default Avatar;
