import React from "react";
import styled from "styled-components";
import { Pyramid } from "../../components/Pyramid/Pyramid";

const StyledPyramids = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  perspective-origin: center top;
  perspective: 1500px;
`;

export const Pyramids = () => {
  return (
    <StyledPyramids>
      <Pyramid sideWidth={400} sideHeight={700} />
    </StyledPyramids>
  );
};
