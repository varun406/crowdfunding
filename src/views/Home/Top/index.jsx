import React, { useEffect, useState } from "react";
import {
  Section2,
  Section2Contents,
  Second,
  Img,
  Secondbottom,
  H1,
  Para,
  Img2,
  First,
} from "../../../styles/Home/Top";
import Image1 from "../../../assets/images/top/second.png";
import Image2 from "../../../assets/images/top/first.png";
import Image3 from "../../../assets/images/top/third.png";
import { getTopThree } from "../../../api/services/User";
import {
  HeadingSection,
  SectionHeading,
} from "../../../styles/Merchandise/StyleSlider";

const Top = () => {
  const [topDonators, setTopDonators] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getTopThree();
      setTopDonators(res);
    };
    getData();
  }, []);
  return (
    <Section2>
      <HeadingSection>
        <SectionHeading>Top Donators</SectionHeading>
      </HeadingSection>
      <Section2Contents>
        <Second>
          <Img src={Image1} />
          <Secondbottom>
            <H1>{topDonators[1]?.amount.toFixed(4)} ETH</H1>
            <Para>{topDonators[1]?._id}</Para>
          </Secondbottom>
        </Second>
        <First>
          <Img2 src={Image2} />
          <Secondbottom>
            <H1>{topDonators[0]?.amount.toFixed(4)} ETH</H1>
            <Para>{topDonators[0]?._id}</Para>
          </Secondbottom>
        </First>
        <Second>
          <Img src={Image3} />
          <Secondbottom>
            <H1>{topDonators[2]?.amount.toFixed(4)} ETH</H1>
            <Para>{topDonators[2]?._id}</Para>
          </Secondbottom>
        </Second>
      </Section2Contents>
    </Section2>
  );
};

export default Top;
