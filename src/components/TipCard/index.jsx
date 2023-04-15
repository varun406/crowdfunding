import React, { useContext, useRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { EthInput, Note, TipButton } from "../../styles/Campaign/Fund";
import { DataContext } from "../../App";
import axios from "axios";
import { useParams } from "react-router-dom";

const TipCard = () => {
  const {
    web3,
    setLoading,
    setSnackbarOpen,
    setSnackbarMsg,
    setTipOpen,
    openTip,
  } = useContext(DataContext);
  const tipRef = useRef();
  const { address } = useParams();

  const handleClose = () => {
    setTipOpen(false);
  };

  const postTransaction = async (
    txnHash,
    currentAddress,
    walletAddress,
    amount
  ) => {
    console.log(currentAddress.toLowerCase());
    await axios.post("http://localhost:5000/transaction/create-transaction", {
      txnName: "Tip: to CrowdFundr",
      txnHash: txnHash,
      donatorAddress: currentAddress.toLowerCase(),
      doneeAddress: walletAddress,
      amount: amount,
    });
    handleClose();
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
        console.log(
          "transactionHash",
          hash,
          "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
          amount
        );
        postTransaction(
          hash,
          address,
          "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
          amount
        );
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
        <TipButton onClick={() => sendEth(address, tipRef.current.value)}>
          Fund Campaign
        </TipButton>
      </DialogActions>
    </Dialog>
  );
};

export default TipCard;
