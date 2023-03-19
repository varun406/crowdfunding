import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-inline: 20px;
`;

export const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
