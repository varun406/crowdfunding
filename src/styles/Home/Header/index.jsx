import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1250px;
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

export const Section = styled.div`
  display: flex;
  gap: 20px;
`;

export const BalanceSection = styled.div`
  width: 100%;
  padding: 5px 12px 5px 0;
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
  display: flex;
  gap: 5px;
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

//FORM
export const FormWrap = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Label = styled.label`
  font: normal normal 500 16px "Work Sans", sans-serif;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  padding-inline: 5px;
  font: normal normal 400 15px "Work Sans", sans-serif;
  min-height: 30px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
`;

export const Error = styled.p`
  max-width: 280px;
  font-size: 12px;
  font-weight: 400;
  color: red;
  margin: 0 0 2px;
`;

export const DescTextArea = styled.textarea`
  height: 100px;
  font: normal normal 400 15px "Work Sans", sans-serif;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  resize: none;
  outline: none;
`;
export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const TargetSection = styled(DateSection)``;
