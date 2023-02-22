import { Menu } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { SideBarContext } from "../../App";
import {
  AccountSection,
  Avatar,
  BalanceSection,
  Connect,
  EthAmount,
  EthLogo,
  HeaderWrap,
  iconStyles,
  Logo,
  LogoSection,
} from "../../styles/Home/Header";

const Header = () => {
  const { isSidebarOpen, setSideBarOpen } = useContext(SideBarContext);
  const [isConnected, setConnnected] = useState(false);
  console.log(isSidebarOpen, setSideBarOpen);

  const handleOpen = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <HeaderWrap>
      <LogoSection>
        <Menu sx={iconStyles} onClick={handleOpen} />
        <Logo>CrowdFundr.</Logo>
      </LogoSection>
      <AccountSection>
        {/* <StartCampaign>Start Campaign</StartCampaign> */}
        {isConnected ? (
          <BalanceSection>
            <EthLogo
              loading="lazy"
              src="https://media.tenor.com/8CnlmiFa-rAAAAAi/eth-ethereum.gif"
            />
            <EthAmount>0.899 eth</EthAmount>
          </BalanceSection>
        ) : (
          <Connect>Connect</Connect>
        )}
      </AccountSection>
    </HeaderWrap>
  );
};

export default Header;
