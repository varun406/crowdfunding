import styled from "styled-components";

export const CardWrap = styled.div`
  width: 100%;
  min-height: 250px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: pointer;
  color: white;
  position: relative;
  background-color: #03001c;
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
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
`;
export const CardTitle = styled.h1`
  font: normal normal 600 16px "Work Sans", sans-serif;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export const CardDesc = styled(CardCategory)`
  font-weight: 400;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const TimingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

export const Time = styled.p`
  font: normal normal 600 18px "Work Sans", sans-serif;
`;

export const FundingSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ProgressSection = styled.div`
  width: 100%;
  height: 15px;
  display: grid;
  place-items: center;

  .MuiLinearProgress-determinate {
    width: 100%;
    height: 7px;
    border-radius: 10px;
    background-color: rgba(160, 26, 201, 0.2);
  }

  .MuiLinearProgress-bar {
    background-color: #a31acb;
  }
`;

export const RaisedSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const EthLogo = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const AmountRaised = styled.h1`
  display: flex;
  align-items: center;
  font: normal normal 600 18px "Work Sans", sans-serif;
`;
export const TargetRaised = styled.p`
  display: flex;
  align-items: center;
  color: gray;
  font: normal normal 400 16px "Work Sans", sans-serif;
`;
export const BackerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const BackerCount = styled(AmountRaised)``;
export const TotalBackers = styled.p`
  font: normal normal 400 14px "Work Sans", sans-serif;
`;
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
