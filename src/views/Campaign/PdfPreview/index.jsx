import React from "react";
import { Heading } from "../../../styles/Campaign/Fund";
import { PdfFrame, PreviewWrap } from "../../../styles/Campaign/PdfPreview";

const PdfPreview = () => {
  return (
    <PreviewWrap>
      <Heading>Bills</Heading>
      <PdfFrame src="/assets/pdf/sample.pdf" />
    </PreviewWrap>
  );
};

export default PdfPreview;
