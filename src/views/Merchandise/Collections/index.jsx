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
        <TShirtImages src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <ShirtImages src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <BagsImages src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </CollectionGroup>
    </CollectionWrap>
  );
};

export default Collections;
