import React from "react";
import { Link } from "react-router-dom";
import CampaignCard from "../../../components/CampaignCard";
import {
  CampaignList,
  CampaignWrap,
} from "../../../styles/Home/CampaignsSection";
import {
  HeadingSection,
  SectionHeading,
} from "../../../styles/Merchandise/StyleSlider";

const CampaignsSection = ({ campaignList }) => {
  return (
    <CampaignWrap>
      <HeadingSection>
        <SectionHeading>All Campaign</SectionHeading>
      </HeadingSection>
      <CampaignList>
        {campaignList?.map((data, index) => (
          <Link to={`/campaign/${data?.id}`} key={index}>
            <CampaignCard data={data} />
          </Link>
        ))}
      </CampaignList>
    </CampaignWrap>
  );
};

export default CampaignsSection;
