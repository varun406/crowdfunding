import { web3 } from "../../App";
import axiosInstance from "../axios";

export const getPDF = async (address) => {
  const res = await axiosInstance.get(`/user/get-pdf?address=${address}`);
  return res.data.message.pdf;
};

//TRANSACTION

export const postTransaction = async (
  campaignId,
  txnName,
  txnHash,
  currentAddress,
  walletAddress,
  amount
) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/transaction/create-transaction",
    {
      campaignId,
      txnName: txnName,
      txnHash: txnHash,
      donatorAddress: currentAddress,
      doneeAddress: walletAddress,
      amount: amount,
    }
  );
  console.log(res.data);
};

export const getDonationTransaction = async (address) => {
  const res = await axiosInstance.get(
    `http://localhost:5000/transaction/donation-transation?address=${address}`
  );
  return res.data.message;
};

export const postWithdrawalRequest = async (
  walletAddress,
  charityName,
  amountRaised,
  targetAmount,
  campaignId
) => {
  const res = await axiosInstance.post(
    `http://localhost:5000/withdrawal/post`,
    {
      address: walletAddress,
      charityName,
      amountRaised: web3?.utils.fromWei(amountRaised, "ether"),
      targetAmount,
      campaignId,
    }
  );
  return res.data.message;
};
