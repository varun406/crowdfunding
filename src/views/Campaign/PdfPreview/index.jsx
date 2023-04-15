import React from "react";
import { Heading } from "../../../styles/Campaign/Fund";
import { PdfFrame, PreviewWrap } from "../../../styles/Campaign/PdfPreview";

const PdfPreview = ({ PDF }) => {
  return (
    <PreviewWrap>
      <Heading>Bills</Heading>
      <PdfFrame src={PDF} />
    </PreviewWrap>
  );
};

export default PdfPreview;
