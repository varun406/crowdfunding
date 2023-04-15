import { MoreHoriz } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";
import { Link } from "react-router-dom";
import { EthLogo } from "../../../styles/Home/CampaignCard";
import {
  HeadingSection,
  SectionHeading,
} from "../../../styles/Merchandise/StyleSlider";
import {
  Amount,
  AmountSection,
  Line,
  LinkSection,
  MoreStyles,
  SpendData,
  SpendList,
  SpendWrapper,
  ToAddress,
  ToSection,
  TxnName,
  linkStyles,
} from "../../../styles/Spend";
const Transactions = ({ txn }) => {
  return (
    <SpendWrapper>
      <HeadingSection>
        <SectionHeading>Transaction History</SectionHeading>
      </HeadingSection>
      <SpendList>
        {txn.map((item, index) => (
          <div key={index}>
            <SpendData>
              <ToSection>
                <TxnName>{item.txnName.substring(0, 55)}...</TxnName>
                <ToAddress>
                  <MoreHoriz sx={MoreStyles} />
                  {item.doneeAddress.substring(33)}
                </ToAddress>
              </ToSection>

              <LinkSection>
                <AmountSection>
                  <EthLogo src="./assets/eth-logo.svg" />
                  <Amount>{item.amount}</Amount>
                </AmountSection>
                <Link to={`https://goerli.etherscan.io/tx/${item.txnHash}`}>
                  <LinkIcon sx={linkStyles} />
                </Link>
              </LinkSection>
            </SpendData>
            <Line />
          </div>
        ))}
      </SpendList>
    </SpendWrapper>
  );
};

export default Transactions;
