import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const iconStyles = {
  display: "none",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  "@media (max-width:768px)": {
    display: "inline-block",
  },
};

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.h1`
  font: normal normal 600 30px "Work Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 420px) {
    font-size: 22px;
  }
`;
export const AccountSection = styled.div`
  display: flex;
  gap: 30px;
`;

export const BalanceSection = styled.div`
  width: 100%;
  padding: 5px 15px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 25px;
`;

export const EthLogo = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
`;

export const EthAmount = styled.p`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;

export const Connect = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  outline: none;
  background: #4b56d2;
  color: white;
  font: normal normal 600 16px "Work Sans", sans-serif;
  cursor: pointer;
`;
