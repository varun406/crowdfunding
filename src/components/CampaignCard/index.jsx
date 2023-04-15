import { AccessTime, Business } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import moment from "moment";
import React from "react";
import {
  AmountRaised,
  BackerSection,
  BottomSection,
  CardCategory,
  CardDesc,
  CardTitle,
  CardWrap,
  CategorySection,
  DetailSection,
  EthLogo,
  FundingSection,
  ProgressSection,
  RaisedSection,
  TargetRaised,
  Time,
  TimingSection,
  TotalBackers,
} from "../../styles/Home/CampaignCard";

const CampaignCard = ({ data }) => {
  return (
    <CardWrap>
      <DetailSection>
        <CardTitle>{data.title}</CardTitle>
        <CategorySection>
          <Business />
          <CardCategory>{data.charityName}</CardCategory>
        </CategorySection>
        <CardDesc>{data.desc}</CardDesc>
        <BottomSection>
          <FundingSection>
            <RaisedSection>
              <BackerSection>
                <AmountRaised>
                  <EthLogo src="./assets/eth-logo.svg" />
                  {data.amount / 1000000000000000000}ETH
                </AmountRaised>{" "}
                <TotalBackers>Raised</TotalBackers>
              </BackerSection>
              <BackerSection>
                {" "}
                <TargetRaised>
                  <EthLogo src="./assets/eth-logo.svg" />
                  {data.target}ETH
                </TargetRaised>
                <TotalBackers>Target</TotalBackers>{" "}
              </BackerSection>
            </RaisedSection>
          </FundingSection>
          <ProgressSection>
            <LinearProgress
              variant="determinate"
              value={
                (parseInt(data?.amount) /
                  1000000000000000000 /
                  parseInt(data?.target)) *
                100
              }
            />
          </ProgressSection>
        </BottomSection>
        <TimingSection>
          <AccessTime />
          <Time>{`closed ${moment.unix(data.releaseTime).fromNow()}`}</Time>
        </TimingSection>
      </DetailSection>
    </CardWrap>
  );
};

export default CampaignCard;
