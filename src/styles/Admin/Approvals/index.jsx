import styled from "styled-components";

export const TabWrap = styled.div`
  width: 100%;
  min-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .MuiButtonBase-root {
    font: normal normal 600 15px "Work Sans", sans-serif;
  }
`;

export const PanelContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const StatusButton = styled.button`
  width: 100%;
  max-width: 120px;
  min-height: 40px;
  padding: 7px 10px;
  border: none;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) => (props.status === "approve" ? "blue" : "red")};
  color: white;
  font: normal normal 600 16px "Work Sans", sans-serif;
  cursor: pointer;
`;
