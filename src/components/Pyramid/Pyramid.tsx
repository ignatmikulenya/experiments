import React from "react";
import styled from "styled-components";

import { convertRadiansToDegrees } from "../../tools/angles";

interface ShapeProps {
  width: number;
  height: number;
}

const StyledShape = styled.div<ShapeProps>`
  position: relative;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  transform-style: preserve-3d;
  animation: rotate-animation 10s infinite linear;

  @keyframes rotate-animation {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

interface SideProps {
  width: number;
  height: number;
  xAngle: number;
  yAngle: number;
}

const StyledSide = styled.div<SideProps>`
  position: absolute;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    linear-gradient(hsl(277deg, 82%, 56%), hsl(252deg, 85%, 56%));
  clip-path: polygon(50% 0, 100% 100%, 0 100%);

  transform-origin: top center;
  transform: rotateY(${(props) => props.yAngle}deg)
    rotateX(${(props) => props.xAngle.toFixed(2)}deg);
`;

interface BaseProps {
  width: number;
  height: number;
  bottomOffset: number;
}

const StyledBase = styled.div<BaseProps>`
  position: absolute;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  transform-origin: center;
  transform: rotateX(-90deg) translateZ(${(props) => props.bottomOffset}px);

  background-color: rebeccapurple;
`;

interface PyramidProps {
  sideWidth: number;
  sideHeight: number;
}

export const Pyramid: React.FC<PyramidProps> = ({ sideWidth, sideHeight }) => {
  const oppositeCathet = sideWidth / 2;
  const height = Math.ceil(
    Math.sqrt(Math.pow(sideHeight, 2) - Math.pow(oppositeCathet, 2))
  );
  const angleInRadians = Math.asin(oppositeCathet / sideHeight);
  const angle = convertRadiansToDegrees(angleInRadians);

  return (
    <StyledShape width={sideWidth} height={sideHeight}>
      <StyledSide
        width={sideWidth}
        height={sideHeight}
        xAngle={angle}
        yAngle={0}
      />
      <StyledSide
        width={sideWidth}
        height={sideHeight}
        xAngle={angle}
        yAngle={-90}
      />
      <StyledSide
        width={sideWidth}
        height={sideHeight}
        xAngle={angle}
        yAngle={90}
      />
      <StyledSide
        width={sideWidth}
        height={sideHeight}
        xAngle={angle}
        yAngle={180}
      />
      <StyledBase
        width={sideWidth}
        height={sideWidth}
        bottomOffset={height - oppositeCathet}
      />
    </StyledShape>
  );
};
