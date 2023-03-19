import { AccessTime } from "@mui/icons-material";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
import {
  Box,
  BoxWrap,
  Counts,
  Details,
  DetailText,
  Numbers,
} from "../../../styles/Campaign/BannerSection";
import {
  CampaignDetails,
  CampaignDetailWrap,
  CreatorAddress,
  CreatorImg,
  CreatorSection,
  DonatorAddress,
  DonatorAmount,
  DonatorList,
  DonatorSection,
  DonatorWrap,
  StoryDesc,
  StorySection,
} from "../../../styles/Campaign/CampaignDetail";
import { Heading } from "../../../styles/Campaign/Fund";
import { Time, TimingSection } from "../../../styles/Home/CampaignCard";
import PdfPreview from "../PdfPreview";

const CampaignDetail = ({ data }) => {
  const { setLoading, contract, currentAddress } = useContext(DataContext);
  const [donators, setDonators] = useState();
  useEffect(() => {
    const getAllDonators = async () => {
      setLoading(true);
      const res = await contract?.methods
        ?.getDonators(data?.walletAddress)
        .call();
      setDonators(res?.filter((item, index) => item?.amount !== "0"));
      setLoading(false);
    };
    getAllDonators();
  }, [contract?.methods, data, setLoading]);

  return (
    <CampaignDetails>
      <CampaignDetailWrap>
        <Heading>Creator</Heading>
        <CreatorSection>
          <CreatorImg src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <CreatorAddress>{data?.walletAddress}</CreatorAddress>
        </CreatorSection>
        <TimingSection>
          <AccessTime />
          <Time>{`closed ${moment.unix(data?.releaseTime).fromNow()}`}</Time>
        </TimingSection>
        <BoxWrap>
          <Box>
            <Numbers>
              <Counts>{parseInt(data?.amount) / 1000000000000000000}</Counts>
            </Numbers>
            <Details>
              <DetailText>Raised</DetailText>
            </Details>
          </Box>
          <Box>
            <Numbers>
              <Counts>{donators?.length}</Counts>
            </Numbers>
            <Details>
              <DetailText>Donators</DetailText>
            </Details>
          </Box>
        </BoxWrap>
        <StorySection>
          <Heading>Story</Heading>
          <StoryDesc>{data?.desc}</StoryDesc>
        </StorySection>
        <DonatorSection>
          <Heading>Donators</Heading>
          {/* {item?.amount !== "0" ? ( */}
          <DonatorList>
            {donators?.map((item, index) => (
              <DonatorWrap key={index}>
                <DonatorAddress>{item?.donator}</DonatorAddress>
                <DonatorAmount>
                  {item?.amount / 1000000000000000000}
                </DonatorAmount>
              </DonatorWrap>
            ))}
          </DonatorList>
          {/* ) : (
                <DonatorAddress key={index}>No one donated yet!</DonatorAddress>
              ) */}
        </DonatorSection>
        <PdfPreview />
      </CampaignDetailWrap>
    </CampaignDetails>
  );
};

export default CampaignDetail;
