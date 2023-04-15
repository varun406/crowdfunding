import styled from "styled-components";
export const CollectionWrap = styled.div`
  width: 100%;
  max-width: 1250px;
  display: grid;
  place-items: center;
  gap: 30px;
`;

export const CollectionGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;

export const ShirtImages = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const BagsImages = styled(ShirtImages)``;

export const TShirtImages = styled(ShirtImages)`
  align-self: flex-end;
`;
