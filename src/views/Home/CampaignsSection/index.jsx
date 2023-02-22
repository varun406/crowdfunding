import React from "react";
import CampaignCard from "../../../components/CampaignCard";
import {
  CampaignList,
  CampaignWrap,
  Heading,
} from "../../../styles/Home/CampaignsSection";

const CampaignsSection = () => {
  return (
    <CampaignWrap>
      <Heading>Live Campaigns</Heading>
      <CampaignList>
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </CampaignList>
    </CampaignWrap>
  );
};

export default CampaignsSection;
