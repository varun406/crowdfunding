import styled from "styled-components";

export const SideBarWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 20px 10px;
  background-color: whitesmoke;
  transition: all 0.25ms ease-in-out;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

export const DetailSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const iconStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "35px",
  height: "35px",
  cursor: "pointer",
};

export const AccountAddress = styled.p`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;

export const StartCampaign = styled.button`
  width: 100%;
  max-width: max-content;
  min-height: 45px;
  padding-inline: 20px;
  border: none;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  background-color: #ad7be9;
  color: white;
  font: normal normal 500 18px "Work Sans", sans-serif;

  &:hover {
    background-color: #a459d1;
  }
`;

export const CopyButton = styled(StartCampaign)`
  padding: 5px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b56d2;
`;
