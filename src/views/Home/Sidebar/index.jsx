import { Close, CopyAll } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { SideBarContext } from "../../../App";
import { Logo } from "../../../styles/Home/Header";
import {
  AccountAddress,
  Avatar,
  CopyButton,
  DetailSection,
  iconStyles,
  SideBarWrap,
  StartCampaign,
} from "../../../styles/Home/Sidebar";

const SideBar = () => {
  const { isSidebarOpen, setSideBarOpen } = useContext(SideBarContext);
  const [address, setAddress] = useState(
    "0xb23d344C961fa85429c458bd97e435fad99220d3"
  );

  const handleClose = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <SideBarWrap>
      <DetailSection>
        <Close sx={iconStyles} onClick={handleClose} />
        <Logo>CrowdFundr.</Logo>
        <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <AccountAddress>{address.slice(0, 23)}....</AccountAddress>
        <CopyButton>
          <CopyAll />
          Copy
        </CopyButton>
        <StartCampaign>Start Campaign</StartCampaign>
      </DetailSection>
    </SideBarWrap>
  );
};

export default SideBar;
