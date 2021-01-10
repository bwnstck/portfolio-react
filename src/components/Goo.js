import React from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Goo = () => {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  return (
    <GooWrapper>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className="hooks-main"
        onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </GooWrapper>
  );
};

export default Goo;

const GooWrapper = styled.div`
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .hooks-main > svg {
    display: none;
  }

  .hooks-main > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: lightcoral;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  .hooks-main > div:nth-child(1) {
    width: 60px;
    height: 60px;
  }

  .hooks-main > div:nth-child(2) {
    width: 100px;
    height: 100px;
  }

  .hooks-main > div:nth-child(3) {
    width: 75px;
    height: 75px;
  }

  .hooks-main > div::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  .hooks-main > div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  .hooks-main > div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  .hooks-main {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url("#goo");
    overflow: hidden;
  }
`;
