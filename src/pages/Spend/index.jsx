import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import Header from "../../components/Header";
import { CampaignContext } from "../../context/CampaignContext";
import { SpendContainer } from "../../styles/Spend";
import Transactions from "../../views/Spend/Transactions";
import { AuthContext } from "../../context/AuthContext";

const Spend = () => {
  const { currentAddress } = useContext(CampaignContext);
  const { user } = useContext(AuthContext);
  const [txn, setTxn] = useState([]);

  useEffect(() => {
    console.log(currentAddress);
    const getData = async () => {
      const res = await axiosInstance.get(
        `/transaction/get-transactions?address=${currentAddress}`
      );
      setTxn(res.data.message);
    };
    user && currentAddress && getData();
  }, [user, currentAddress]);

  console.log(txn);
  console.log(currentAddress);
  return (
    <SpendContainer>
      <Header />
      <Transactions txn={txn} currentAddress={currentAddress} />
    </SpendContainer>
  );
};

export default Spend;
