import styled from "styled-components";

export const TabWrap = styled.div`
  width: 100%;
  min-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .MuiDataGrid-overlayWrapperInner {
    background-color: #03001c;
  }

  .MuiButtonBase-root {
    color: white;
    font: normal normal 600 15px "Work Sans", sans-serif;
  }

  .MuiDataGrid-columnHeaderTitle,
  .MuiDataGrid-virtualScrollerRenderZone {
    color: white;
  }
`;

export const PanelContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const ActionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StatusButton = styled.button`
  width: 100%;
  max-width: 80px;
  height: 35px;
  padding: 5px 7px;
  border: none;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) => (props.status === "approve" ? "blue" : "red")};
  color: white;
  font: normal normal 600 14px "Work Sans", sans-serif;
  cursor: pointer;
`;
