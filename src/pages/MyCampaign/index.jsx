import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { getAllCampaigns } from "../../api/services/Campaign";
import { CampaignContext } from "../../context/CampaignContext";
import { Container, Wrapper } from "../../styles/Home/Main";
import Header from "../../components/Header";
import CampaignsSection from "../../views/Home/CampaignsSection";
import TipCard from "../../components/TipCard";

const MyCampaign = () => {
  const { setLoading } = useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [campaignList, setCampaignList] = useState();
  useEffect(() => {
    const getCampaigns = async () => {
      setLoading(true);
      const allCampaigns = await getAllCampaigns();
      console.log(allCampaigns);
      const filteredCampaigns = allCampaigns?.filter(
        (item) =>
          item.walletAddress.toLowerCase() === currentAddress?.toLowerCase()
      );
      console.log(filteredCampaigns);
      filteredCampaigns && setCampaignList(filteredCampaigns);
      setLoading(false);
    };
    getCampaigns();
  }, [currentAddress]);
  return (
    <Container>
      <Wrapper>
        <Header />
        {campaignList?.length !== 0 ? (
          <CampaignsSection heading="My Campaign" campaignList={campaignList} />
        ) : (
          <h1>You havent initiated any campaign</h1>
        )}
      </Wrapper>
    </Container>
  );
};

export default MyCampaign;
