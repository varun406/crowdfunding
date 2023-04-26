import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
import {
  ActionWrap,
  InsideWrap,
  StatusButton,
} from "../../../styles/Admin/Approvals";
import PaymentDrawer from "../PaymentDrawer";

const Approvals = () => {
  const { setLoading, setDrawerOpen, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const [value, setValue] = useState("1");
  const [approvedData, setApproveData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);
  const [processingData, setProcessingData] = useState([]);
  const [changeData, setChangeData] = useState([]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const rejectRequest = async (id, status) => {
    setLoading(true);
    await axios.put(
      `http://localhost:5000/withdrawal/change-status?id=${id}&status=${status}`
    );
    setSnackbarOpen(true);
    setSnackbarMsg("Request Rejected");
    setLoading(false);
  };

  const approveRequest = async (campaignId) => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:5000/withdrawal/get-request?campaignId=${campaignId}`
    );

    setChangeData(res.data.message[0]);
    setDrawerOpen(true);
    setLoading(false);
  };

  const requestColumn = [
    { field: "_id", headerName: "Id", width: 100 },
    { field: "campaignId", headerName: "Campaign Id", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "charityName", headerName: "Charity Name", width: 180 },
    {
      field: "amountRaised",
      headerName: "Amount Raised",
      width: 120,
    },
    {
      field: "targetAmount",
      headerName: "Target Amount",
      width: 100,
    },
    {
      field: "widthdrawalStatus",
      headerName: "Withdrawal Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <ActionWrap>
            <StatusButton
              status="approve"
              onClick={() => approveRequest(params.row.campaignId)}
            >
              Approve
            </StatusButton>
            <StatusButton
              status="reject"
              onClick={() => rejectRequest(params.row._id, "rejected")}
            >
              Reject
            </StatusButton>
          </ActionWrap>
        );
      },
    },
  ];

  const approvedColumn = [
    { field: "_id", headerName: "Id", width: 100 },
    { field: "campaignId", headerName: "Campaign Id", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "charityName", headerName: "Charity Name", width: 180 },
    {
      field: "amountRaised",
      headerName: "Amount Raised",
      width: 120,
    },
    {
      field: "targetAmount",
      headerName: "Target Amount",

      width: 100,
    },
    {
      field: "widthdrawalStatus",
      headerName: "Withdrawal Status",
      width: 160,
    },
  ];

  const rejectedColumn = [
    { field: "_id", headerName: "Id", width: 100 },
    { field: "campaignId", headerName: "Campaign Id", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "charityName", headerName: "Charity Name", width: 180 },
    {
      field: "amountRaised",
      headerName: "Amount Raised",
      width: 120,
    },
    {
      field: "targetAmount",
      headerName: "Target Amount",

      width: 100,
    },
    {
      field: "widthdrawalStatus",
      headerName: "Withdrawal Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <ActionWrap>
            <StatusButton
              status="approve"
              onClick={() => approveRequest(params.row.campaignId)}
            >
              Approve
            </StatusButton>
          </ActionWrap>
        );
      },
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const res = await Promise.all([
        axios.get("http://localhost:5000/withdrawal/approved"),
        axios.get("http://localhost:5000/withdrawal/rejected"),
        axios.get("http://localhost:5000/withdrawal/processing"),
      ]);
      const [approved, rejected, processing] = res.map(
        (res) => res.data.message
      );
      setApproveData(approved);
      setRejectedData(rejected);
      setProcessingData(processing);
    };
    getData();
  }, [changeData]);

  return (
    <InsideWrap>
      {changeData && <PaymentDrawer data={changeData} />}

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Request" value="1" />
            <Tab label="Approved" value="2" />
            <Tab label="Rejected" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGrid
            rows={processingData}
            getRowId={(row) => row._id}
            columns={requestColumn}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: "100%", minHeight: "500px" }}
          />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid
            rows={approvedData}
            getRowId={(row) => row._id}
            columns={approvedColumn}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: "100%", minHeight: "500px" }}
          />
        </TabPanel>
        <TabPanel value="3">
          <DataGrid
            rows={rejectedData}
            getRowId={(row) => row._id}
            columns={rejectedColumn}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: "100%", minHeight: "500px" }}
          />
        </TabPanel>
      </TabContext>
    </InsideWrap>
  );
};

export default Approvals;
