import React from "react";
import { Container, Wrapper } from "../../styles/Home/Main";
import Header from "../../components/Header";
import CampaignsSection from "../../views/Home/CampaignsSection";
import SideBar from "../../views/Home/Sidebar";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <CampaignsSection />
      </Wrapper>
    </Container>
  );
};

export default Home;
