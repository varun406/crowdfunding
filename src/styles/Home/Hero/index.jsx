import styled from "styled-components";

export const HeroSection = styled.div`
  background-color: transparent;
  min-height: 500px;
  width: 100%;
  padding-block: 20px;
`;

export const HeroSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  text-align: center;
  padding: 10px;
`;

export const H1 = styled.div`
  color: blue;
  font-size: 55px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 420px) {
    font-size: 25px;
  }
`;
export const ParaGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  text-align: center;

  @media (max-width: 675px) {
    max-width: 400px;
  }

  @media (max-width: 475px) {
    max-width: 350px;
  }
`;
export const Para = styled.div`
  color: #949494;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 675px) {
    font-size: 14px;
  }
`;
export const Hands = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
`;
export const Hand1 = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image1 = styled.img`
  background-color: transparent;
  width: 100%;
  max-width: 900px;
`;

export const Anchor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
`;

export const AnchorButton = styled.a`
  background-color: #337efe;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }

  @media (max-width: 675px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 475px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;
