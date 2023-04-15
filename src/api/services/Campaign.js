import { contract, web3 } from "../../App";
import { postTransaction } from "./User";

export const getAllCampaigns = async () => {
  return await contract?.methods.getAllCampaigns().call();
};

export const getSingleCampaign = async (address) => {
  return await contract?.methods.getCampaign(address).call();
};

export const addCampaign = async (
  id,
  address,
  charityName,
  title,
  desc,
  endDate,
  target,
  currentAddress
) => {
  await contract?.methods
    .addCampaign(
      id,
      address,
      charityName,
      title,
      desc,
      endDate,
      target,
      0,
      currentAddress
    )
    .send({ from: currentAddress })
    .on("error", function (err) {
      console.log(err);
    });
};

export const availableToWithdraw = async (walletAddress, currentAddress) => {
  return await contract?.methods
    .availableToWithdraw(walletAddress)
    .send({ from: currentAddress });
};

export const depositFund = async (
  walletAddress,
  currentAddress,
  charityTitle,
  getFund,
  campaignId
) => {
  web3.eth
    .sendTransaction({
      from: currentAddress,
      to: "0xabaf9726c4b72778f89f949779c7932cc9d4f9cb",
      value: web3.utils.toWei(getFund, "ether"), //web3.utils.toWei(amount, "ether")
    })
    .on("transactionHash", async function (hash) {
      console.log("transactionHash", hash);
      console.log(web3.utils.toWei(getFund, "ether"));
      console.log(Number(getFund) * 1000000000000000000);
      if (hash) {
        await contract?.methods
          .addToKidsBalance(walletAddress, web3.utils.toWei(getFund, "ether"))
          .send({
            from: currentAddress,
          });

        await postTransaction(
          campaignId,
          charityTitle,
          hash,
          currentAddress,
          walletAddress,
          getFund
        );
      }
    })
    .on("error", async function (err) {
      console.log(err);
      return;
    });
};
