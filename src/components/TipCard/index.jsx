import React, { useContext, useRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { EthInput, Note, TipButton } from "../../styles/Campaign/Fund";
import { DataContext, web3 } from "../../App";
import axios from "axios";
import { CampaignContext } from "../../context/CampaignContext";
import { postTransaction } from "../../api/services/User";
import { AuthContext } from "../../context/AuthContext";

const TipCard = () => {
  const tipRef = useRef();
  const { setLoading, setSnackbarOpen, setSnackbarMsg, setTipOpen, openTip } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const { user } = useContext(AuthContext);

  const handleClose = () => {
    setTipOpen(false);
  };

  const sendEth = (address, amount) => {
    setLoading(true);

    web3.eth
      .sendTransaction({
        from: address,
        to: "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
        value: web3.utils.toWei(amount, "ether"), //web3.utils.toWei(amount, "ether")
      })
      .on("transactionHash", async function (hash) {
        if (hash) {
          await postTransaction(
            user,
            "Tip: to crowdFundr",
            hash,
            address,
            "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
            amount
          );
          setTipOpen(false);
        }
      })
      .on("error", async function (err) {
        setSnackbarOpen(true);
        setSnackbarMsg(err.message);
        setLoading(false);
        handleClose();
      });
    setLoading(false);
  };

  return (
    <Dialog maxWidth="sm" open={openTip} keepMounted onClose={handleClose}>
      <DialogTitle>Tip</DialogTitle>
      <DialogContent>
        <EthInput
          ref={tipRef}
          type="number"
          placeholder="Eg.,0.1"
          min="0.0001"
          defaultValue={0.001}
        />
        <Note>Thanks for giving a tip, it will help others</Note>
      </DialogContent>
      <DialogActions>
        <TipButton
          onClick={() => sendEth(currentAddress, tipRef.current.value)}
        >
          Fund Campaign
        </TipButton>
      </DialogActions>
    </Dialog>
  );
};

export default TipCard;
