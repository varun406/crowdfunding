import React from "react";
import {
  H1,
  Heading,
  HeroSection,
  HeroSectionWrapper,
  ParaGraph,
  Para,
  Hands,
  Hand1,
  Image1,
  Anchor,
  AnchorButton,
} from "../../../styles/Home/Hero";
import Img1 from "../../../assets/hero/hand1.png";
import Img2 from "../../../assets/hero/hand2.png";

const Hero = () => {
  return (
    <HeroSection>
      <HeroSectionWrapper>
        <Heading>
          <H1>The slightest help from you, will mean a lot to them</H1>
        </Heading>
        <ParaGraph>
          <Para>
            Help others by using sharing, a platform that is safe, transparent
            and trusted
          </Para>
        </ParaGraph>
        <Hands>
          <Hand1>
            <Image1 src={Img1} />
          </Hand1>
          <Anchor>
            <AnchorButton href="#">Get Started</AnchorButton>
          </Anchor>
          <Hand1>
            <Image1 src={Img2} />
          </Hand1>
        </Hands>
      </HeroSectionWrapper>
    </HeroSection>
  );
};

export default Hero;
