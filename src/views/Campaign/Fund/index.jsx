import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext, web3 } from "../../../App";
import {
  availableToWithdraw,
  depositFund,
} from "../../../api/services/Campaign";
import {
  checkEligibility,
  postWithdrawalRequest,
} from "../../../api/services/User";
import { CampaignContext } from "../../../context/CampaignContext";
import {
  EthInput,
  FundButton,
  FundForm,
  FundWrap,
  Heading,
  Label,
  TipButton,
} from "../../../styles/Campaign/Fund";
import Withdraw from "../Withdraw";

const Fund = ({
  walletAddress,
  charityName,
  charityTitle,
  amountRaised,
  targetAmount,
  isCampaignEnded,
  campaignId,
}) => {
  const { setLoading, setSnackbarOpen, setSnackbarMsg, setTipOpen } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [getFund, setFund] = useState(0.02);
  const [requestStatus, setRequestStatus] = useState("");
  const [withdrawStatus, setWithdrawStatus] = useState("");

  useEffect(() => {
    const checkWithdrawAvailability = async () => {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/withdrawal/get-request?campaignId=${campaignId}`
      );

      setRequestStatus(res?.data.message[0]?.widthdrawalStatus || null);
      console.log(requestStatus);
      setLoading(false);
    };
    checkWithdrawAvailability();
  }, [walletAddress, campaignId]);

  const DepositFund = async (e) => {
    e.preventDefault();
    if (getFund > targetAmount - amountRaised / 1000000000000000000) {
      setSnackbarOpen(true);
      setSnackbarMsg("ETH Amount is greater");
      return;
    }

    setLoading(true);
    console.log(walletAddress, currentAddress, charityTitle, typeof getFund);
    await depositFund(
      walletAddress,
      currentAddress,
      charityTitle,
      getFund,
      campaignId
    );
    setLoading(false);
  };

  const SendRequest = async (e) => {
    e.preventDefault();
    console.log("run");
    setLoading(true);
    if (amountRaised <= 0) {
      console.log("run");
      setSnackbarOpen(true);
      setSnackbarMsg("Your haven't raised any amount!");

      setLoading(false);
      setSnackbarOpen(false);
    } else {
      const canWithdraw = await availableToWithdraw(campaignId, currentAddress);
      setWithdrawStatus(canWithdraw);
      await postWithdrawalRequest(
        walletAddress,
        charityName,
        web3?.utils.fromWei(amountRaised, "ether"),
        targetAmount,
        campaignId
      );

      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <FundWrap>
      <Heading>
        {walletAddress?.toLowerCase() === currentAddress ? "Withdraw" : "Fund"}
      </Heading>
      {walletAddress?.toLowerCase() === currentAddress ? (
        <Withdraw
          requestStatus={requestStatus}
          isCampaignEnded={isCampaignEnded}
          SendRequest={SendRequest}
        />
      ) : (
        <FundForm>
          <Label>Enter ETH to donate</Label>
          <EthInput
            type="number"
            placeholder="Eg.,0.1"
            min="0.02"
            value={getFund}
            onChange={(e) => setFund(e.target.value)}
          />
          <FundButton onClick={(e) => DepositFund(e)} type="submit">
            Fund Campaign
          </FundButton>
        </FundForm>
      )}
      {walletAddress?.toLowerCase() === currentAddress
        ? requestStatus === "approved" && (
            <TipButton onClick={() => setTipOpen(true)}>
              Tip CrowdFundr
            </TipButton>
          )
        : null}
    </FundWrap>
  );
};

export default Fund;
