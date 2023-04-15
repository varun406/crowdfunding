import styled from "styled-components";

export const DrawerWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 30px 20px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const CharitySection = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FundSection = styled(CharitySection)``;
export const CharityName = styled.h2`
  font: normal normal 500 20px "Work Sans", sans-serif;
`;
export const CharityAddress = styled.p`
  font: normal normal 500 18px "Work Sans", sans-serif;
  color: grey;
`;
export const FundAmount = styled.h2`
  font: normal normal 500 22px "Work Sans", sans-serif;
`;
export const SendEth = styled.button`
  width: 100%;
  height: 40px;
  background-color: skyblue;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font: normal normal 600 18px "Work Sans", sans-serif;
`;
