import React, { useContext, useEffect, useState } from "react";

import Header from "../../components/Header";
import TipCard from "../../components/TipCard";
import { Container, Wrapper } from "../../styles/Home/Main";
import CampaignsSection from "../../views/Home/CampaignsSection";
import { CampaignContext } from "../../context/CampaignContext";
import { DataContext } from "../../App";
import { getAllCampaigns } from "../../api/services/Campaign";
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
      <Wrapper>
        <Header />
        <CampaignsSection campaignList={campaignList} />
        <TipCard />
      </Wrapper>
    </Container>
  );
};

export default Home;
