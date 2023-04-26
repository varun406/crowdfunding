import styled from "styled-components";

export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: transparent;
`;

export const Section2Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  min-height: 500px;
  flex-wrap: wrap;
`;

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  gap: 10px;
  background-color: transparent;
`;
export const Img = styled.img`
  max-width: 240px;
  max-height: 270px;
`;
export const Secondbottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const H1 = styled.h1`
  color: whitesmoke;
`;
export const Para = styled.p`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
`;

export const Img2 = styled.img`
  max-width: 320px;
  max-height: 360px;
`;

export const First = styled(Second)`
  min-height: 600px;
`;
