import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout></InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div``;
