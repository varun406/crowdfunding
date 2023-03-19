import React from "react";
import {
  CampaignList,
  CampaignWrap,
  Heading,
} from "../../../styles/Home/CampaignsSection";
import CampaignCard from "../../../components/CampaignCard";
import { Link } from "react-router-dom";

const CampaignsSection = ({ campaignList }) => {
  return (
    <CampaignWrap>
      <Heading>All Campaigns</Heading>
      <CampaignList>
        {campaignList?.map((data, index) => (
          <Link to={`/campaign/${data?.walletAddress}/${index}`} key={index}>
            <CampaignCard data={data} />
          </Link>
        ))}
      </CampaignList>
    </CampaignWrap>
  );
};

export default CampaignsSection;
