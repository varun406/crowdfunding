import React from "react";
import Header from "../../components/Header";
import { Container, Wrapper } from "../../styles/Campaign/Main";
import Collections from "../../views/Merchandise/Collections";
import StyleSlider from "../../views/Merchandise/StyleSlider";
import ProductSlider from "../../views/Merchandise/ProductSlider";
import Hero from "../../views/Merchandise/Hero";

const Merchandise = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Wrapper>
        <StyleSlider />
        <Collections />
        <ProductSlider />
      </Wrapper>
    </Container>
  );
};

export default Merchandise;
