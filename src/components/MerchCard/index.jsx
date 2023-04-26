import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext, web3 } from "../../App";
import { postTransaction } from "../../api/services/User";
import { CampaignContext } from "../../context/CampaignContext";
import {
  BuyNow,
  EthAmount,
  MerchCardWrap,
  MerchImage,
  PriceSection,
} from "../../styles/Merchandise/MerchCard";
import { AuthContext } from "../../context/AuthContext";

const MerchCard = ({ url, amount, styles }) => {
  const { setLoading, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const { user } = useContext(AuthContext);
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
            user,
            "Purchased Merchandise",
            hash,
            currentAddress,
            "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
            0.0025 //TODO: enter amount
          );
          handleClose();
        }
      })
      .on("error", async function (err) {
        setSnackbarOpen(true);
        setSnackbarMsg(err.message);
        setLoading(false);
      });
    setLoading(false);
  };

  console.log(amount);

  return (
    <>
      <Dialog maxWidth="lg" open={open} keepMounted onClose={handleClose}>
        <DialogTitle>Grab it</DialogTitle>
        <DialogContent>
          <MerchImage src={url} />
        </DialogContent>
        <DialogActions>
          <BuyNow onClick={sendEth}>Buy Now</BuyNow>
        </DialogActions>
      </Dialog>
      <MerchCardWrap url={url} onClick={!styles ? openModal : null}>
        {!styles && (
          <PriceSection>
            <EthAmount>0.0025 Eth</EthAmount>
          </PriceSection>
        )}
      </MerchCardWrap>
    </>
  );
};

export default MerchCard;
