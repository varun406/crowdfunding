import React from "react";
import { FolderOutlined } from "@mui/icons-material";
import {
  AmountRaised,
  AuthorImage,
  AuthorName,
  AuthorSection,
  BackerCount,
  BackerSection,
  CardCategory,
  CardDesc,
  CardImage,
  CardTitle,
  CardWrap,
  CategorySection,
  DetailSection,
  FundingSection,
  ImageSection,
  Join,
  RaisedSection,
  TargetRaised,
  TotalBackers,
} from "../../styles/Home/CampaignCard";

const CampaignCard = () => {
  return (
    <CardWrap>
      <ImageSection>
        <CardImage loading="lazy" src="/assets/1.jpg" />
      </ImageSection>
      <CategorySection>
        <FolderOutlined sx={{ color: "grey" }} />
        <CardCategory> Education</CardCategory>
      </CategorySection>
      <DetailSection>
        <CardTitle>Powered kits Learning Boxes</CardTitle>
        <CardDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CardDesc>
        <FundingSection>
          <RaisedSection>
            <AmountRaised>1.2 eth</AmountRaised>
            <TargetRaised>Raised of 10 eth</TargetRaised>
          </RaisedSection>
          <BackerSection>
            <BackerCount>50</BackerCount>
            <TotalBackers>Total backers</TotalBackers>
          </BackerSection>
        </FundingSection>
      </DetailSection>
      <AuthorSection>
        <AuthorImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <AuthorName>
          <Join>by </Join>Adom Shafi
        </AuthorName>
      </AuthorSection>
    </CardWrap>
  );
};

export default CampaignCard;
