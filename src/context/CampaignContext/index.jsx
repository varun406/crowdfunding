import React, { createContext, useContext, useEffect, useState } from "react";
import { web3 } from "../../App";
import { AuthContext } from "../AuthContext";

export const CampaignContext = createContext();

const CampaignProvider = ({ children }) => {
  const { userAddress } = useContext(AuthContext);
  const [currentAddress, setCurrentAddress] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const onInit = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAddress(accounts[0]);

      //get balance from METAMASK account
      const result = await web3?.eth.getBalance(accounts[0]);
      const resultFormated = await web3?.utils.fromWei(result);

      setBalance(resultFormated);
    };
    onInit();
  }, []);

  window.ethereum.on("accountsChanged", async function (accounts) {
    // Time to reload your interface with accounts[0]!
    console.log(userAddress, accounts[0]);
    console.log(accounts[0]);
    // localStorage.clear();
    setCurrentAddress(accounts[0]);
    const result = await web3?.eth.getBalance(accounts[0]);
    const resultFormated = await web3?.utils.fromWei(result);

    setBalance(resultFormated);
  });

  return (
    <CampaignContext.Provider value={{ currentAddress, balance }}>
      {children}
    </CampaignContext.Provider>
  );
};

export default CampaignProvider;
