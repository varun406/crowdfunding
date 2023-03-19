import styled from "styled-components";

export const BannerSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BannerImg = styled.img`
  width: 100%;
  max-height: 350px;
  border-radius: 12px;
  object-fit: fill;
`;
export const BoxWrap = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: row;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
  border-radius: 12px;
`;
export const Numbers = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-block: 5px;
`;
export const Counts = styled.h1`
  color: white;
  font: normal normal 600 30px "Work Sans", sans-serif;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

export const Details = styled(Numbers)`
  border-top: 1px solid black;
`;

export const DetailText = styled.p`
  color: darkgrey;
  font: normal normal 400 18px "Work Sans", sans-serif;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
