import React from "react";
import Logo1 from "../../../assets/images/1.avif";
import Logo2 from "../../../assets/images/2.avif";
import Logo3 from "../../../assets/images/3.avif";
import Logo4 from "../../../assets/images/4.avif";
import Logo5 from "../../../assets/images/5.avif";
import Logo6 from "../../../assets/images/6.avif";
import Logo7 from "../../../assets/images/7.avif";
import {
  Anchor,
  Heading,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Left,
  LeftWrapper,
  Para,
  Right,
  RightWrapper,
  Section1,
  Section1Contents,
} from "../../../styles/Merchandise/Hero";
import {
  HeadingSection,
  SectionHeading,
} from "../../../styles/Merchandise/StyleSlider";

const Hero = () => {
  return (
    <Section1>
      <Section1Contents>
        <LeftWrapper>
          <Left>
            <Heading>Start Today Change Tomorrow</Heading>
            <Para>
              Join us on this journey - support our CrowdFundr campaign and be a
              part of something big!
            </Para>
          </Left>
        </LeftWrapper>
        <RightWrapper>
          <Right>
            <Image1 src={Logo1} />
            <Image2 src={Logo2} />
            <Image3 src={Logo4} />
            <Image4 src={Logo5} />
            <Image5 src={Logo6} />
            <Image6 src={Logo4} />
            <Image7 src={Logo7} />
            <Image8 src={Logo1} />
          </Right>
        </RightWrapper>
      </Section1Contents>
    </Section1>
  );
};

export default Hero;
