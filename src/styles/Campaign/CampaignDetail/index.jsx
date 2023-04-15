import styled from "styled-components";

export const CampaignDetails = styled.div`
  flex: 3;
`;
export const CampaignDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const CreatorSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const CreatorImg = styled.img`
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  &:nth-child(2) {
    left: 33px;
  }
  &:nth-child(3) {
    left: 63px;
  }
  &:nth-child(4) {
    left: 93px;
  }
`;
export const CreatorAddress = styled.p`
  font: normal normal 500 18px "Work Sans", sans-serif;
`;
export const StorySection = styled(CampaignDetailWrap)`
  gap: 10px;
`;
export const StoryDesc = styled.p`
  font: normal normal 500 18px "Work Sans", sans-serif;
  color: whitesmoke;
`;
export const DonatorSection = styled.div``;
export const DonatorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-block: 10px;
`;

export const DonatorWrap = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const DonatorAddress = styled.p`
  font: normal normal 400 18px "Work Sans", sans-serif;
`;
export const DonatorAmount = styled.p`
  font: normal normal 400 18px "Work Sans", sans-serif;
`;
