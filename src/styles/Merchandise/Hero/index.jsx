import styled from "styled-components";

export const Section1 = styled.div`
  width: 100%;
  max-width: 1250px;
`;
export const Section1Contents = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Left = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Right = styled.div`
  position: absolute;
  top: -200px;
  right: -250px;
  transform: rotate(45deg);
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
`;

export const Heading = styled.h1`
  font-size: 60px;
  line-height: 1;
`;

export const Para = styled.p`
  color: gray;
  font-size: 18px;
  width: 100%;
  max-width: 350px;
`;
export const Anchor = styled.a`
  background-color: #ff597b;
  color: white;
  padding: 10px 15px;
  border: 1px solid #ff597b;
  border-radius: 10px;
  width: 100%;
  max-width: 150px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
`;
export const Image1 = styled.img`
  width: 100%;
  /* max-width:200px; */
  height: 300px;
  border-radius: 25px;
  object-fit: cover;
`;
export const Image2 = styled(Image1)``;
export const Image3 = styled(Image1)``;
export const Image4 = styled(Image1)``;
export const Image5 = styled(Image1)``;
export const Image6 = styled(Image1)``;
export const Image7 = styled(Image1)``;
export const Image8 = styled(Image1)``;
