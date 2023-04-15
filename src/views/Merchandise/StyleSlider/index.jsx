import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./sliderSettings";
import {
  CardWrapper,
  HeadingSection,
  SectionHeading,
  SliderWrap,
  StyledSlider,
} from "../../../styles/Merchandise/StyleSlider";
import MerchCard from "../../../components/MerchCard";
import { imageData } from "./data";

const StyleSlider = () => {
  const rotationData = [
    "5deg",
    "6deg",
    "-7deg",
    "7deg",
    "-9deg",
    "4deg",
    "-4deg",
    "-2deg",
    "8deg",
    "-7deg",
    "12deg",
  ];

  return (
    <SliderWrap>
      <HeadingSection>
        <SectionHeading>New Collections of Us</SectionHeading>
      </HeadingSection>
      <StyledSlider {...settings}>
        {imageData.map((item, index) => (
          <CardWrapper key={index} random={rotationData[index]}>
            <MerchCard url={item.url} />
          </CardWrapper>
        ))}
      </StyledSlider>
    </SliderWrap>
  );
};

export default StyleSlider;
