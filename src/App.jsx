import { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Campaign from "./pages/Campaign";
import Home from "./pages/Home";
import SideBar from "./views/Home/Sidebar";
import CryptoKids from "./contracts/CryptoKids.json";
import { Backdrop, Dialog } from "@mui/material";
import Admin from "./pages/Admin";

export const SideBarContext = createContext(null);
export const DataContext = createContext(null);

const abi = CryptoKids.abi;
const contract_address = "0xba92BF0Bc34D71a4289F408b8014f8C17f789d94";

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState();
  const [balance, setBalance] = useState();
  const [contract, setContract] = useState();
  const [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  //NOTE:WEB3 CONNECTION

  const web3 = new Web3(Web3.givenProvider);
  async function onInit() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAddress(accounts[0]);
    //get balance from METAMASK account
    const result = await web3.eth.getBalance(accounts[0]);
    const resultFormated = web3.utils.fromWei(result);
    setBalance(resultFormated);

    window.ethereum.on("accountsChanged", function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0]);
      setCurrentAddress(accounts[0]);
    });
  }

  onInit();

  useEffect(() => {
    const deploy = async () => {
      //CONTRACT
      const contract = await new web3.eth.Contract(abi, contract_address);
      setContract(contract);
    };

    deploy();
  }, []);

  return (
    <div className="App">
      <DataContext.Provider
        value={{ web3, setLoading, currentAddress, balance, contract }}
      >
        <SideBarContext.Provider value={{ isSideBarOpen, setSideBarOpen }}>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <HashLoader
              loading={loading}
              cssOverride={override}
              size={150}
              color="#C04A82"
            />
          </Backdrop>
          {isSideBarOpen && <SideBar />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaign/:address/:no" element={<Campaign />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </SideBarContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
