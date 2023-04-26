import { web3 } from "../../App";
import axiosInstance from "../axios";

//USER

export const getPDF = async (address) => {
  const res = await axiosInstance.get(`/user/get-pdf?address=${address}`);
  return res.data.message.pdf;
};

export const getTopThree = async () => {
  const res = await axiosInstance.get(`/user/get-top-three`);
  return res.data.message;
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
  await axiosInstance.post("/transaction/create-transaction", {
    campaignId,
    txnName: txnName,
    txnHash: txnHash,
    donatorAddress: currentAddress,
    doneeAddress: walletAddress,
    amount: amount,
  });
};

export const getDonationTransaction = async (address) => {
  const res = await axiosInstance.get(
    `/transaction/donation-transation?address=${address}`
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
  const res = await axiosInstance.post(`/withdrawal/post`, {
    address: walletAddress,
    charityName,
    amountRaised: amountRaised,
    targetAmount,
    campaignId,
  });
  return res.data.message;
};

//REWARD

export const generateRewardRequest = async (userId) => {
  const res = await axiosInstance.post(`/reward/post-request`, {
    userId,
  });
  return res.data.message;
};

export const checkEligibility = async (address) => {
  const res = await axiosInstance.get(
    `/user/checkEligibility?address=${address}`
  );
  return res.data.message;
};

export const singleRewardData = async (id) => {
  const res = await axiosInstance.get(`/reward/single-reward?rewardId=${id}`);
  return res.data.message;
};

export const allProcessingRequest = async () => {
  const res = await axiosInstance.get(`/reward/get-processing-requests`);
  return res.data.message;
};

export const allApprovedRequest = async () => {
  const res = await axiosInstance.get(`/reward/get-approved-requests`);
  return res.data.message;
};

export const creditReward = async (id) => {
  const res = await axiosInstance.get(`/reward/credit-reward?rewardId=${id}`);
  return res.data.message;
};
