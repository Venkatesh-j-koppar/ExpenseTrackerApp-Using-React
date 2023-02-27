import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "../src/img/bg.png";
import Orb from "./Components/Orb/Orb";
import { MainLayout } from "./styles/Layout";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

export default function App() {
  const [active, setActive] = useState(1);

  const glob = useGlobalContext();
  console.log(glob);

  const orbMemo = useMemo(() => {
    return <Orb></Orb>;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard></Dashboard>;
      case 2:
        return <Dashboard></Dashboard>;
      case 3:
        return <Income></Income>;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard></Dashboard>;
    }
  };
  return (
    <AppStyled className="App" bg={bg}>
      {orbMemo}

      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    padding: 5px;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
