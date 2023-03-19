import React from "react";
import Header from "../../components/Header";
import { Container, Wrapper } from "../../styles/Campaign/Main";
import Approvals from "../../views/Admin/Approvals";

const Admin = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Approvals />
      </Wrapper>
    </Container>
  );
};

export default Admin;
