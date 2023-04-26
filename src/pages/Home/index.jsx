import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../../App";
import { getAllCampaigns } from "../../api/services/Campaign";
import Header from "../../components/Header";
import TipCard from "../../components/TipCard";
import { CampaignContext } from "../../context/CampaignContext";
import { Container, Wrapper } from "../../styles/Home/Main";
import CampaignsSection from "../../views/Home/CampaignsSection";
import Hero from "../../views/Home/Hero";
import Top from "../../views/Home/Top";
const Home = () => {
  const { setLoading } = useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [campaignList, setCampaignList] = useState();

  useEffect(() => {
    const getCampaigns = async () => {
      setLoading(true);
      const allCampaigns = await getAllCampaigns();

      const filteredCampaigns = allCampaigns.filter(
        (campaign) => campaign?.isCampaignEnded === false
      );

      console.log(allCampaigns);
      console.log(filteredCampaigns);

      setCampaignList(filteredCampaigns);
      setLoading(false);
    };
    getCampaigns();
  }, [currentAddress]);

  return (
    <Container>
      <Header />
      <Hero />
      <Wrapper>
        <Top />
        <CampaignsSection heading="All Campaigns" campaignList={campaignList} />
        <TipCard />
      </Wrapper>
    </Container>
  );
};

export default Home;
