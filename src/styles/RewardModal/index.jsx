import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 340px;
  min-height: 350px;
  display: flex;
  background-color: #5120f1;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px;
  font-family: "Work Sans", sans-serif;
`;
export const H1 = styled.h1`
  font: normal normal 600 24px "Work Sans", sans-serif;
  color: white;
`;

export const Troph = styled.img`
  width: 100%;
  max-width: 270px;
  height: 180px;
  background-color: transparent;
  border-radius: 5px;
`;

export const Para = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const NoteSection = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 7px;
`;
export const Note = styled.p`
  font: normal normal 400 14px "Work Sans", sans-serif;
`;

export const ClaimButton = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#03001c")};
  color: white;
  padding: 15px;
  border-radius: 25px;
  border: none;
  outline: none;
  width: 100%;
  max-width: 170px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
