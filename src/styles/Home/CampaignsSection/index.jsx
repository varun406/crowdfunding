import styled from "styled-components";

export const CampaignWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.h1`
  font: normal normal 22px "Work Sans", sans-serif;
`;

export const CampaignList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 25px;
`;
