import styled from "styled-components";
import Slider from "react-slick";

export const SliderWrap = styled.div`
  width: 100%;
  min-width: 350px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeadingSection = styled.div`
  display: grid;
  place-items: center;
`;

export const SectionHeading = styled.h2`
  width: max-content;
  text-align: center;
  font: normal normal 600 45px/1.3 "Work Sans", sans-serif;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 7px;
    left: 0;
    width: 100%;
    height: 10px;
    background-image: linear-gradient(to left, blue, #a31acb);
    background-position: bottom;
    transition: transform 0.5s ease-out;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 270px;
  min-height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  transition: box-shadow 0.5s;
  padding-inline: 10px;
  transform: rotate(${(props) => props.random});
  transition: transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotate(0deg) scale(1.3);
    z-index: 99;
  }
`;

export const StyledSlider = styled(Slider)`
  button {
    z-index: 9999;
  }
  .slick-prev {
    left: 10px !important;
    z-index: 999;
  }
  .slick-next {
    right: 10px !important;
    z-index: 1;
  }
  .slick-slide > div {
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-list {
    margin: 0 0px;
  }

  .slick-slide,
  .slick-track {
    overflow: visible;
    padding-block: 20px;
  }
`;
