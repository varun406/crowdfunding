import { AccessTime } from "@mui/icons-material";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
import { getDonationTransaction, getPDF } from "../../../api/services/User";
import { DetailText, Details } from "../../../styles/Campaign/BannerSection";
import {
  CampaignDetailWrap,
  CampaignDetails,
  CreatorImg,
  CreatorSection,
  StoryDesc,
  StorySection,
} from "../../../styles/Campaign/CampaignDetail";
import { Heading } from "../../../styles/Campaign/Fund";
import { Time, TimingSection } from "../../../styles/Home/CampaignCard";
import PdfPreview from "../PdfPreview";

const CampaignDetail = ({ data }) => {
  const { setLoading } = useContext(DataContext);
  const [donators, setDonators] = useState("");
  const [PDF, setPDF] = useState("");
  useEffect(() => {
    const getAllDonators = async () => {
      setLoading(true);
      const pdf = await getPDF(data?.walletAddress);
      setPDF(pdf);
      const donation = await getDonationTransaction(data?.walletAddress);
      setDonators([...new Set(donation.map((item) => item.donatorAddress))]);
      setLoading(false);
    };
    getAllDonators();
  }, [data]);

  return (
    <CampaignDetails>
      <CampaignDetailWrap>
        <Heading>{data?.title}</Heading>
        <CreatorSection>
          {donators &&
            donators.map((item) => (
              <CreatorImg
                src={`https://api.multiavatar.com/${item}.svg`}
                alt="donator"
                key={item}
              />
            ))}
        </CreatorSection>
        <TimingSection>
          <Details>
            <DetailText>
              {parseInt(data?.amount) / 1000000000000000000}ETH Raised out of{" "}
              {data?.target}ETH
            </DetailText>
          </Details>

          <Details>
            <AccessTime />
            <Time>
              {" "}
              {` closed ${moment.unix(data?.releaseTime).fromNow()}`}
            </Time>
          </Details>
        </TimingSection>

        <StorySection>
          <Heading>Description</Heading>
          <StoryDesc>{data?.desc}</StoryDesc>
        </StorySection>

        {PDF && <PdfPreview PDF={PDF} />}
      </CampaignDetailWrap>
    </CampaignDetails>
  );
};

export default CampaignDetail;
