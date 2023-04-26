import React from "react";
import MerchCard from "../../../components/MerchCard";
import { ProductSliderWrap } from "../../../styles/Merchandise/Main";
import {
  CardWrapper,
  HeadingSection,
  SectionHeading,
  StyledSlider,
} from "../../../styles/Merchandise/StyleSlider";
import { imageData } from "../StyleSlider/data";
import { settings } from "../StyleSlider/sliderSettings";

const ProductSlider = () => {
  return (
    <ProductSliderWrap>
      <HeadingSection>
        <SectionHeading>Our Products</SectionHeading>
      </HeadingSection>
      <StyledSlider {...settings}>
        {imageData.map((item, index) => (
          <CardWrapper key={index}>
            <MerchCard url={item.url} />
          </CardWrapper>
        ))}
      </StyledSlider>
    </ProductSliderWrap>
  );
};

export default ProductSlider;
