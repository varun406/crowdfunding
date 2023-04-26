import { createContext, useEffect, useState } from "react";
import "./index.css";
import Web3 from "web3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Campaign from "./pages/Campaign";
import Home from "./pages/Home";
import SideBar from "./views/Home/Sidebar";
import CryptoKids from "./contracts/CryptoKids.json";
import { Backdrop, Dialog, Snackbar } from "@mui/material";
import Admin from "./pages/Admin";
import PaymentDrawer from "./views/Admin/PaymentDrawer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Spend from "./pages/Spend";
import AuthProvider from "./context/AuthContext";
import CampaignProvider from "./context/CampaignContext";
import MyCampaign from "./pages/MyCampaign";
import Merchandise from "./pages/Merchandise";
import PrivateRoutes from "./routes/PrivateRoutes";
import RewardModal from "./components/RewardModal";

export const SideBarContext = createContext(null);
export const DataContext = createContext(null);

const abi = CryptoKids.abi;
const contract_address = "0x701Fb47CBc4d0eA382A21F1A5A4cF3Eda5730834";
export const web3 = new Web3(Web3.givenProvider);
export const contract = new web3.eth.Contract(abi, contract_address);

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const [contract, setContract] = useState();
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [openTip, setTipOpen] = useState(false);
  const [openLogin, setLoginOpen] = useState(false);
  const [openSignup, setSignupOpen] = useState(false);
  const [openRewardModal, setRewardModal] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  //NOTE:WEB3 CONNECTION

  useEffect(() => {
    const deploy = async () => {
      //CONTRACT

      setContract(contract);
    };

    deploy();
  }, []);

  return (
    <div className="App">
      <DataContext.Provider
        value={{
          web3,
          setLoading,
          contract,
          setDrawerOpen,
          isDrawerOpen,
          setSnackbarOpen,
          setSnackbarMsg,
          setTipOpen,
          openTip,
          openLogin,
          setLoginOpen,
          openSignup,
          setSignupOpen,
          openRewardModal,
          setRewardModal,
        }}
      >
        <AuthProvider>
          <CampaignProvider>
            <SideBarContext.Provider value={{ isSideBarOpen, setSideBarOpen }}>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
              >
                <HashLoader
                  loading={loading}
                  cssOverride={override}
                  size={150}
                  color="#C04A82"
                />
              </Backdrop>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={isSnackbarOpen}
                onClose={() => setSnackbarOpen(false)}
                message={snackbarMsg}
              />
              {isSideBarOpen && <SideBar />}
              {openLogin && <Login />}
              {openSignup && <Signup />}

              {openRewardModal && <RewardModal />}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route element={<PrivateRoutes />}>
                    <Route path="/campaign/:id" element={<Campaign />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/spend" element={<Spend />} />
                    <Route path="/mycampaign" element={<MyCampaign />} />
                    <Route path="/merchandise" element={<Merchandise />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </SideBarContext.Provider>
          </CampaignProvider>
        </AuthProvider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
