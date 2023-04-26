import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";

import { TabWrap } from "../../../styles/Admin/Approvals";
import Approvals from "../Approvals";
import Rewards from "../Rewards";

const MainTab = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <TabWrap>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Withdrawal Requests" value="1" />
            <Tab label="Rewards Requests" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Approvals />
        </TabPanel>
        <TabPanel value="2">
          <Rewards />
        </TabPanel>
      </TabContext>
    </TabWrap>
  );
};

export default MainTab;
