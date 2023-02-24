import React from "react";
import styled from "styled-components";
import bg from "../src/img/bg.png";
import Orb from "./Components/Orb/Orb";
import { MainLayout } from "./styles/Layout";
import Navigation from "./Components/Navigation/Navigation";

export default function App() {
  return (
    <AppStyled className="App" bg={bg}>
      <Orb></Orb>
      <MainLayout>
        <Navigation></Navigation>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;