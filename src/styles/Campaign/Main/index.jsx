import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-inline: 20px;
`;

export const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const PaymentSection = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
