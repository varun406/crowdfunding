import styled from "styled-components";
export const Section = styled.div`
  width: 100%;
  min-height: 40px;
  display: none;
  align-self: flex-end;
`;
export const MerchCardWrap = styled.div`
  width: 100%;
  min-height: 300px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover ${Section} {
    display: flex;
  }
`;

export const MerchImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const BuyNow = styled.button`
  width: 100%;
  height: 40px;
  background: yellow;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font: normal normal 700 16px "Mukta", sans-serif;
`;

export const SizeButton = styled.button`
  flex: 1;
  background: transparent;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font: normal normal 700 16px "Mukta", sans-serif;

  &:hover {
    color: #a31acb;
  }
`;

export const PriceSection = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;
export const EthAmount = styled.h2`
  width: max-content;
  padding: 10px;
  border-top-left-radius: 25px;
  background: #03001c;
  font: normal normal 700 18px "Mukta", sans-serif;
`;
