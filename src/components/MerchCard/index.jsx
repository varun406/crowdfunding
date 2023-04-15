import React, { useState } from "react";
import {
  MerchCardWrap,
  SizeButton,
  Section,
  PriceSection,
  EthAmount,
  MerchImage,
  BuyNow,
} from "../../styles/Merchandise/MerchCard";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import { CampaignContext } from "../../context/CampaignContext";
import { postTransaction } from "../../api/services/User";

const MerchCard = ({ url }) => {
  const { web3, setLoading, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const sendEth = () => {
    // console.log(typeof web3.utils.toWei(amount, "ether"));
    web3.eth
      .sendTransaction({
        from: currentAddress,
        to: "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
        value: 2500000000000000, //web3.utils.toWei(amount, "ether")
      })
      .on("transactionHash", async function (hash) {
        console.log("transactionHash", hash);
        if (hash) {
          await postTransaction(
            "Withdrawal Approved",
            hash,
            currentAddress,
            "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
            0.25 //TODO: enter amount
          );
        }
      })
      .on("error", async function (err) {
        setSnackbarOpen(true);
        setSnackbarMsg(err.message);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <MerchCardWrap url={url}>
      <Dialog maxWidth="lg" open={open} keepMounted onClose={handleClose}>
        <DialogTitle>Grab it</DialogTitle>
        <DialogContent>
          <MerchImage src={url} />
        </DialogContent>
        <DialogActions>
          <BuyNow onClick={sendEth}>Buy Now</BuyNow>
        </DialogActions>
      </Dialog>
      <Section>
        <SizeButton onClick={openModal}>XL</SizeButton>
        <SizeButton onClick={openModal}>XXL</SizeButton>
      </Section>
      <PriceSection>
        <EthAmount>0.25Eth</EthAmount>
      </PriceSection>
    </MerchCardWrap>
  );
};

export default MerchCard;
