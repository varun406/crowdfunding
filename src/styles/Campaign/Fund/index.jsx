import styled from "styled-components";

export const FundWrap = styled.div`
  width: 100%;
  max-width: 250px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  background-color: #03001c;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.02);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
export const Label = styled.label`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;

export const Heading = styled.h1`
  font: normal normal 600 35px "Work Sans", sans-serif;
`;

export const FundForm = styled.form`
  width: 100%;
  padding-block: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const EthInput = styled.input`
  width: 100%;
  font: normal normal 500 16px "Work Sans", sans-serif;
  padding: 10px 10px;
  border: 5px solid rgba(160, 26, 201, 0.2);
  border-radius: 10px;
  outline: none;
`;
export const FundButton = styled.button`
  width: 100%;
  min-height: 45px;
  color: white;
  background-color: #a31acb;
  border: none;
  border-radius: 5px;
  outline: none;
  font: normal normal 600 18px "Work Sans", sans-serif;
  cursor: pointer;
`;

export const TipButton = styled(FundButton)`
  background-color: skyblue;
`;

export const Note = styled.p`
  padding: 10px;
  font: normal normal 500 15px "Work Sans", sans-serif;
`;

export const WithdrawWrap = styled.div``;

export const RequestStatus = styled.h2`
  color: grey;
  padding: 10px;
  font: normal normal 500 15px "Work Sans", sans-serif;

  span {
    font: normal normal 600 18px "Work Sans", sans-serif;
    text-decoration: underline;
  }
`;

export const WithdrawButton = styled(FundButton)``;
