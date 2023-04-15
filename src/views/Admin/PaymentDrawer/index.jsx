import { Drawer } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
import {
  CharityAddress,
  CharityName,
  CharitySection,
  DrawerWrap,
  FundAmount,
  FundSection,
  SendEth,
} from "../../../styles/Admin/Drawer";
import { postTransaction } from "../../../api/services/User";

const PaymentDrawer = ({ data }) => {
  const {
    web3,
    setLoading,
    setDrawerOpen,
    isDrawerOpen,
    setSnackbarOpen,
    setSnackbarMsg,
  } = useContext(DataContext);
  const [txnHash, setTxnHash] = useState("");

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(false);
  };

  console.log(data);

  useEffect(() => {
    const approveRequest = async () => {
      const res = await axios.put(
        `http://localhost:5000/withdrawal/change-status?id=${data?._id}&status=approved`
      );
      console.log(res.data.message);
      setSnackbarOpen(true);
      setSnackbarMsg("Request Approved");
    };

    txnHash && approveRequest();
    setTxnHash("");
  }, [data?._id, txnHash]);

  const sendEth = (address, amount) => {
    console.log(address, amount);
    console.log(typeof web3.utils.toWei(amount, "ether"));
    web3.eth
      .sendTransaction({
        from: "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
        to: address,
        value: web3.utils.toWei(amount, "ether"), //web3.utils.toWei(amount, "ether")
      })
      .on("transactionHash", async function (hash) {
        console.log("transactionHash", hash);
        if (hash) {
          setTxnHash(hash);
          await postTransaction(
            "Withdrawal Approved",
            hash,
            "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
            address,
            amount
          );
        }
      })
      .on("error", async function (err) {
        setSnackbarOpen(true);
        setSnackbarMsg(err.message);
        setLoading(false);
      });
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={isDrawerOpen}
      onClose={() => toggleDrawer(isDrawerOpen)}
    >
      <DrawerWrap>
        <CharitySection>
          <CharityName>{data?.charityName}</CharityName>
          <CharityAddress>{data?.address}</CharityAddress>
        </CharitySection>
        <FundSection>
          <FundAmount>ETH {data?.amountRaised}</FundAmount>
          <SendEth
            onClick={() =>
              sendEth(data?.address, data?.amountRaised.toString())
            }
          >
            Send ETH
          </SendEth>
        </FundSection>
      </DrawerWrap>
    </Drawer>
  );
};

export default PaymentDrawer;
