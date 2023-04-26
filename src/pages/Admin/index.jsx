import React from "react";
import Header from "../../components/Header";
import { Container, Wrapper } from "../../styles/Campaign/Main";
import MainTab from "../../views/Admin/MainTab";

const Admin = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <MainTab />
      </Wrapper>
    </Container>
  );
};

export default Admin;
