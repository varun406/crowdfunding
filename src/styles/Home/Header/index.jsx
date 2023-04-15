import styled from "styled-components";

export const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #03001c;
`;

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
  a {
    color: transparent !important;
    text-decoration: none;
  }
`;

export const Logo = styled.h1`
  font: normal normal 700 40px "Work Sans", sans-serif;
  background-image: linear-gradient(to left, blue, #a31acb);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 3s ease infinite;

  @keyframes shine {
    0% {
      background-position: 25% 100%;
    }

    100% {
      background-position: 100% 100%;
    }
  }

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
  border: 1px solid rgba(255, 255, 255, 0.09);
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

export const ListGroup = styled.ul`
  position: absolute;
  z-index: 1;
  inset: auto auto -176px -130px;
  width: 180px;
  display: none;
  flex-direction: column;
  background-color: #03001c;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.02);
  border-radius: 5px;

  &:hover {
    display: flex;
  }
`;

export const EthAvatar = styled.img`
  width: 50px;
  height: 50px;

  &:hover + ${ListGroup} {
    display: flex;
  }
`;

export const MenuSection = styled.div`
  position: relative;
  height: 55px;
`;

export const List = styled.li`
  width: 100%;
  text-align: right;
  padding: 15px 15px;
  list-style: none;
  font: normal normal 600 14px "Work Sans", sans-serif;
  cursor: pointer;
  color: white;

  a {
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
  }

  &:hover,
  a:hover {
    background-color: rgba(255, 255, 255, 0.02);
    color: purple;
  }
`;

export const Connect = styled.button`
  width: 100%;
  max-width: 150px;
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
