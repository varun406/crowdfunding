import React from "react";
import {
  BagsImages,
  CollectionGroup,
  CollectionWrap,
  ShirtImages,
  TShirtImages,
} from "../../../styles/Merchandise/Collections";
import { SectionHeading } from "../../../styles/Merchandise/StyleSlider";

const Collections = () => {
  return (
    <CollectionWrap>
      <SectionHeading>Most Styled Collection</SectionHeading>
      <CollectionGroup>
        <TShirtImages src="/assets/tshirt/3.png" alt="collection-1" />
        <ShirtImages src="/assets/tshirt/1.png" alt="collection-2" />
        <BagsImages src="/assets/tshirt/7.png" alt="collection-3" />
      </CollectionGroup>
    </CollectionWrap>
  );
};

export default Collections;
