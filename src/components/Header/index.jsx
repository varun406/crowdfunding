import { yupResolver } from "@hookform/resolvers/yup";
import { EmojiEvents, Menu, Wallet } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { DataContext, SideBarContext } from "../../App";
import { addCampaign } from "../../api/services/Campaign";
import { checkEligibility } from "../../api/services/User";
import { AuthContext } from "../../context/AuthContext";
import { CampaignContext } from "../../context/CampaignContext";
import {
  AccountSection,
  BalanceSection,
  Connect,
  DateSection,
  DescTextArea,
  Error,
  EthAmount,
  EthAvatar,
  EthLogo,
  FormWrap,
  HeaderContainer,
  HeaderWrap,
  Input,
  Label,
  List,
  ListGroup,
  Logo,
  LogoSection,
  Logout,
  MenuSection,
  Section,
  TargetSection,
  WalletAddress,
  iconStyles,
} from "../../styles/Home/Header";
import { uploadFile } from "../../utils/uploadFiles";
import { campaignSchema } from "./campaignSchema";
import { ClaimButton } from "../../styles/RewardModal";

const Header = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched", resolver: yupResolver(campaignSchema) });
  const { user, userAddress } = useContext(AuthContext);
  const { setSideBarOpen } = useContext(SideBarContext);
  const { setLoading, setLoginOpen, setRewardModal } = useContext(DataContext);
  const { balance, currentAddress } = useContext(CampaignContext);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const eligible = async () => {
      await checkEligibility(currentAddress);
    };
    user && currentAddress && eligible();
  }, [user, currentAddress]);

  const handleSideBarOpen = () => {
    setSideBarOpen((prev) => !prev);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    data.endDate = moment(Date.parse(data.endDate)).unix();
    //SEND TO CAMPAIGN
    setLoading(true);
    const id = await uuidv4();

    await addCampaign(
      id,
      data.address,
      data.charityName,
      data.title,
      data.desc,
      data.endDate,
      data.target,
      currentAddress
    );

    await uploadFile(id, user, data.attachment[0]);

    handleClose();
    reset();
    setLoading(false);
  };

  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <HeaderContainer>
      <HeaderWrap>
        <Dialog maxWidth="sm" open={open} keepMounted onClose={handleClose}>
          <DialogTitle>Add Campaign</DialogTitle>
          <DialogContent>
            <FormWrap onSubmit={handleSubmit(onSubmit)}>
              <Label>Account address</Label>
              <Input {...register("address")} />
              <Error>{errors.address?.message}</Error>
              <Label>Charity Name</Label>
              <Input {...register("charityName")} />
              <Error>{errors.charityName?.message}</Error>
              <Label>Title</Label>
              <Input {...register("title")} />
              <Error>{errors.title?.message}</Error>
              <Label>Description</Label>
              <DescTextArea {...register("desc")} />
              <Error>{errors.desc?.message}</Error>
              <Section>
                <DateSection>
                  <Label>End-date</Label>
                  <Input {...register("endDate")} type="datetime-local" />
                  <Error>{errors.endDate?.message}</Error>
                </DateSection>
                <TargetSection>
                  <Label>Target</Label>
                  <Input {...register("target")} type="number" />
                  <Error>{errors.target?.message}</Error>
                </TargetSection>
              </Section>
              <Label>Bills/Receipt</Label>
              <Input {...register("attachment")} type="file" />

              <DialogActions>
                <Button onClick={handleClose}>Discard</Button>
                <Button type="submit">Add</Button>
              </DialogActions>
            </FormWrap>
          </DialogContent>
        </Dialog>
        <LogoSection>
          <Menu sx={iconStyles} onClick={handleSideBarOpen} />
          <Link to="/">
            <Logo>CrowdFundr.</Logo>
          </Link>
        </LogoSection>
        {user ? (
          <AccountSection>
            {balance && (
              <Section>
                <ClaimButton onClick={() => setRewardModal(true)}>
                  <EmojiEvents sx={{ paddingInline: "2px" }} /> Rewards
                </ClaimButton>
                <WalletAddress>
                  <Wallet sx={{ paddingInline: "2px" }} />{" "}
                  {currentAddress?.substr(0, 5)}...
                  {currentAddress?.substr(35, 42)}
                </WalletAddress>
                <BalanceSection>
                  <EthLogo src="https://media.tenor.com/8CnlmiFa-rAAAAAi/eth-ethereum.gif" />
                  <EthAmount>{balance?.substr(0, 5)}ETH</EthAmount>
                </BalanceSection>
                <MenuSection>
                  <EthAvatar
                    src={` https://api.multiavatar.com/${currentAddress}.svg`}
                    alt="avatar"
                  />
                  <ListGroup>
                    <List onClick={() => handleClickOpen()}>
                      Start campaign
                    </List>
                    <List>
                      <Link to="/mycampaign">My Campaign</Link>
                    </List>
                    <List>
                      <Link to="/spend">Transaction history</Link>
                    </List>
                    <List>
                      <Link to="/merchandise">Merchandise</Link>
                    </List>
                    <List>
                      <Logout onClick={logout}>Logout</Logout>
                    </List>
                  </ListGroup>
                </MenuSection>
              </Section>
            )}
          </AccountSection>
        ) : (
          <Connect onClick={() => setLoginOpen(true)}>Login</Connect>
        )}
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
