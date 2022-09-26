import React from "react";
import styled from "styled-components";
import { Pyramids } from "./pages/Pyramids/Pyramids";

const StyledApp = styled.div`
  height: 100vh;

  background-color: #282c34;
`;

function App() {
  return (
    <StyledApp>
      <Pyramids />
    </StyledApp>
  );
}

export default App;
