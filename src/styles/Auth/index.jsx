import styled from "styled-components";

export const FormWrap = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: blue;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: rebeccapurple;
  font: normal normal 600 16px "Work Sans", sans-serif;
  color: white;
  cursor: pointer;
`;
