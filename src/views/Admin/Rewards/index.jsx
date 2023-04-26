import { DataGrid } from "@mui/x-data-grid";
import { Drawer } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useContext, useEffect, useState } from "react";
import { rewardColumn } from "./data";
import {
  ActionWrap,
  InsideWrap,
  StatusButton,
} from "../../../styles/Admin/Approvals";
import {
  CharityAddress,
  CharityName,
  CharitySection,
  DrawerWrap,
  FundAmount,
  FundSection,
  SendEth,
} from "../../../styles/Admin/Drawer";
import {
  allApprovedRequest,
  allProcessingRequest,
  creditReward,
  postTransaction,
  rewardData,
  singleRewardData,
} from "../../../api/services/User";
import { DataContext, web3 } from "../../../App";

const Rewards = () => {
  const { setLoading, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const [processingRequest, setProcessingRequest] = useState([]);
  const [approvedRequest, setApprovedRequest] = useState([]);
  const [currentReward, setCurrentReward] = useState();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [txnHash, setTxnHash] = useState("");

  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await Promise.all([
        allProcessingRequest(),
        allApprovedRequest(),
      ]);
      const [processing, approved] = res;
      setProcessingRequest(processing);
      setApprovedRequest(approved);
    };
    getData();
  }, [txnHash]);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCurrentReward();

    setDrawerOpen(false);
  };

  const getReward = async (id) => {
    const res = await singleRewardData(id);
    setCurrentReward(res);
    setDrawerOpen(true);
  };

  const sendEth = (address, amount, id) => {
    console.log(address, amount);
    console.log(typeof web3.utils.toWei(amount, "ether"));
    setLoading(true);
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
            id,
            "Donator Reward",
            hash,
            "0xABaF9726c4b72778f89f949779c7932cc9d4F9cB",
            address,
            amount
          );

          const res = await creditReward(id);
          setDrawerOpen(false);
          setSnackbarOpen(true);
          setSnackbarMsg(res);
          setLoading(false);
        }
      })
      .on("error", async function (err) {
        setSnackbarOpen(true);
        setSnackbarMsg(err.message);
        setLoading(false);
      });
  };

  const rewardAction = {
    field: "action",
    headerName: "Actions",
    width: 160,
    renderCell: (params) => {
      return (
        <ActionWrap>
          <StatusButton
            status="approve"
            onClick={() => getReward(params.row._id)}
          >
            Approve
          </StatusButton>
        </ActionWrap>
      );
    },
  };
  return (
    <InsideWrap>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Under Processing" value="1" />
            <Tab label="Approved Rewards" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGrid
            rows={processingRequest}
            getRowId={(row) => row._id}
            columns={rewardColumn.concat(rewardAction)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: "100%", minHeight: "500px" }}
          />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid
            rows={approvedRequest}
            getRowId={(row) => row._id}
            columns={rewardColumn}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: "100%", minHeight: "500px" }}
          />
        </TabPanel>
      </TabContext>

      {currentReward && (
        <Drawer
          anchor={"bottom"}
          open={isDrawerOpen}
          onClose={(e) => toggleDrawer(e)}
        >
          <DrawerWrap>
            <CharitySection>
              <CharityName>Donator Reward</CharityName>
              <CharityAddress>{currentReward.userAddress}</CharityAddress>
            </CharitySection>
            <FundSection>
              <FundAmount>ETH {currentReward.amount}</FundAmount>
              <SendEth
                onClick={() =>
                  sendEth(
                    currentReward.userAddress,
                    currentReward.amount.toString(),
                    currentReward._id
                  )
                }
              >
                Send ETH
              </SendEth>
            </FundSection>
          </DrawerWrap>
        </Drawer>
      )}
    </InsideWrap>
  );
};

export default Rewards;
