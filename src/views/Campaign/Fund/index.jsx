import React, { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { DataContext } from "../../../App";
import {
  EthInput,
  FundButton,
  FundForm,
  FundWrap,
  Heading,
  Label,
  WithdrawButton,
} from "../../../styles/Campaign/Fund";

const Fund = ({ walletAddress, creator }) => {
  const { web3, setLoading, contract, currentAddress } =
    useContext(DataContext);
  const [getFund, setFund] = useState(0.02);

  useEffect(() => {
    const checkWithdrawAvailability = async () => {
      setLoading(true);
      const res = await contract?.methods
        ?.availableToWithdraw(walletAddress)
        ?.call();

      console.log(res);
      // web3.eth
      //   .sendTransaction({
      //     from: "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
      //     to: "0xb23d344C961fa85429c458bd97e435fad99220d3",
      //     value: "1000000000000000",
      //   })
      //   .then(function (receipt) {
      //     console.log(receipt);
      //   });
      setLoading(false);
    };

    checkWithdrawAvailability();
  }, [walletAddress]);

  const DepositFund = async (e) => {
    e.preventDefault();
    setLoading(true);
    await contract?.methods?.deposit(walletAddress, currentAddress)?.send({
      from: currentAddress,
      value: getFund * 1000000000000000000,
    });
    setLoading(false);
    window.location.reload();
  };

  const WithdrawFund = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(walletAddress);
    await contract?.methods
      ?.withdraw(walletAddress)
      ?.send({
        from: currentAddress,
        to: currentAddress,
        value: 30000000000000000,
      })
      .then(console.log("success"));
    setLoading(false);
  };

  return (
    <FundWrap>
      <Heading>
        {walletAddress?.toLowerCase() === currentAddress ? "Withdraw" : "Fund"}
      </Heading>
      {walletAddress?.toLowerCase() === currentAddress ? (
        <WithdrawButton onClick={WithdrawFund}>Request Withdraw</WithdrawButton>
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
          <FundButton onClick={DepositFund} type="submit">
            Fund Campaign
          </FundButton>
        </FundForm>
      )}
    </FundWrap>
  );
};

export default Fund;
