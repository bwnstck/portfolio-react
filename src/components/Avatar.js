import React from "react";
import styled from "styled-components/macro";
import AvatarPic from "../assets/avatar.svg";

const Avatar = () => {
  return (
    <AvatarWrapper>
      <div>
        <ImgMask urlString={AvatarPic} />
      </div>
    </AvatarWrapper>
  );
};
const AvatarWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid gold;
  > div {
    background-color: rebeccapurple;
  }
  div {
    width: 296px;
    height: 296px;

    border-radius: 50%;
    max-height: 100%;
    margin: 0;
  }
`;

const ImgMask = styled.div`
  background-image: url(${(props) => `${props.urlString}`});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-size: 100vmin;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: all 300ms ease-in-out;
  &&:hover {
    transform: rotate(2deg) scale(0.9);
  }
`;
export default Avatar;
