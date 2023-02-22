import styled from "styled-components";

export const CardWrap = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

export const ImageSection = styled.div`
  width: 100%;
`;
export const CardImage = styled.img`
  width: 100%;
  max-height: 180px;
  border-radius: 12px;
  object-fit: cover;
`;
export const CategorySection = styled.div`
  padding-inline: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const CardCategory = styled.p`
  color: gray;
  font: normal normal 500 14px "Work Sans", sans-serif;
`;
export const DetailSection = styled.div`
  width: 100%;
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;
export const CardTitle = styled.h1`
  font: normal normal 600 16px "Work Sans", sans-serif;
`;
export const CardDesc = styled(CardCategory)`
  font-weight: 400;
`;
export const FundingSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const RaisedSection = styled(DetailSection)`
  gap: 5px;
`;
export const AmountRaised = styled.h1`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;
export const TargetRaised = styled.p`
  color: gray;
  font: normal normal 400 12px "Work Sans", sans-serif;
`;
export const BackerSection = styled(RaisedSection)``;
export const BackerCount = styled(AmountRaised)``;
export const TotalBackers = styled(TargetRaised)``;
export const AuthorSection = styled(FundingSection)`
  padding: 0 20px 10px;
  align-items: center;
  justify-content: flex-start;
`;
export const AuthorImage = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 50%;
`;
export const AuthorName = styled.p`
  font: normal normal 500 14px "Work Sans", sans-serif;
`;
export const Join = styled.span`
  font: normal normal 400 14px "Work Sans", sans-serif;
`;
