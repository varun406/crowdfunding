import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext, contract, web3 } from "../../../App";
import {
  EthInput,
  FundButton,
  FundForm,
  FundWrap,
  Heading,
  Label,
  RequestStatus,
  WithdrawButton,
  WithdrawWrap,
} from "../../../styles/Campaign/Fund";
import { CampaignContext } from "../../../context/CampaignContext";
import {
  availableToWithdraw,
  depositFund,
} from "../../../api/services/Campaign";
import Withdraw from "../Withdraw";
import { postWithdrawalRequest } from "../../../api/services/User";

const Fund = ({
  walletAddress,
  charityName,
  charityTitle,
  amountRaised,
  targetAmount,
  isCampaignEnded,
}) => {
  const { setLoading, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [getFund, setFund] = useState(0.02);
  const [requestStatus, setRequestStatus] = useState("");
  const [withdrawStatus, setWithdrawStatus] = useState("");

  useEffect(() => {
    const checkWithdrawAvailability = async () => {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/withdrawal/get-request?address=${walletAddress}`
      );

      setRequestStatus(res?.data.message[0]?.widthdrawalStatus || null);
      setLoading(false);
    };
    checkWithdrawAvailability();
  }, [walletAddress]);

  const DepositFund = async (e) => {
    e.preventDefault();
    if (getFund > targetAmount - amountRaised / 1000000000000000000) {
      setSnackbarOpen(true);
      setSnackbarMsg("ETH Amount is greater");
      return;
    }

    setLoading(true);
    console.log(walletAddress, currentAddress, charityTitle, typeof getFund);
    await depositFund(walletAddress, currentAddress, charityTitle, getFund);
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
      console.log("run");
      console.log(web3?.utils.fromWei(amountRaised, "ether"));
      const canWithdraw = await availableToWithdraw(
        walletAddress,
        currentAddress
      );
      console.log(canWithdraw);
      setWithdrawStatus(canWithdraw);
      const res = await postWithdrawalRequest(
        walletAddress,
        charityName,
        amountRaised,
        targetAmount
      );
      setSnackbarOpen(true);
      setSnackbarMsg(res.data.message);
      setLoading(false);
      setSnackbarOpen(false);
    }
  };

  return (
    <FundWrap>
      <Heading>
        {walletAddress?.toLowerCase() === currentAddress ? "Withdraw" : "Fund"}
      </Heading>
      {walletAddress?.toLowerCase() === currentAddress ? (
        <Withdraw requestStatus={requestStatus} SendRequest={SendRequest} />
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
    </FundWrap>
  );
};

export default Fund;
