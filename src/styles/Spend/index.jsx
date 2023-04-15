import styled from "styled-components";

export const SpendContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 30px;
  padding-inline: 20px;
`;

export const SpendWrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SpendList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const SpendData = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

export const ToSection = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

export const TxnName = styled.p`
  font: normal normal 500 15px "Work Sans", sans-serif;
`;

export const ToAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const AmountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const Amount = styled.p`
  font: normal normal 600 15px "Work Sans", sans-serif;
`;

export const linkStyles = {
  fontSize: "25px",
  color: "blue",
};

export const MoreStyles = {
  fontSize: "25px",
};

export const Line = styled.hr`
  opacity: 0.3;
`;
