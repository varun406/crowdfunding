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
  background-color: #edf1d6;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const Label = styled.label`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;

export const Heading = styled.h1`
  font: normal normal 600 20px "Work Sans", sans-serif;
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
  font: normal normal 400 16px "Work Sans", sans-serif;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;
export const FundButton = styled.button`
  width: 100%;
  min-height: 45px;
  color: white;
  background-color: rebeccapurple;
  border: none;
  border-radius: 12px;
  outline: none;
  font: normal normal 600 18px "Work Sans", sans-serif;
  cursor: pointer;
`;

export const WithdrawButton = styled(FundButton)`
  background-color: red;
`;
