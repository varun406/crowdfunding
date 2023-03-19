import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataContext, SideBarContext } from "../../App";
import {
  AccountSection,
  Avatar,
  BalanceSection,
  Connect,
  DateSection,
  DescTextArea,
  Error,
  EthAmount,
  EthLogo,
  FormWrap,
  HeaderWrap,
  iconStyles,
  Input,
  Label,
  Logo,
  LogoSection,
  Section,
  TargetSection,
} from "../../styles/Home/Header";
import { StartCampaign } from "../../styles/Home/Sidebar";
import { campaignSchema } from "./campaignSchema";
import moment from "moment";

const Header = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(campaignSchema) });

  const { setSideBarOpen } = useContext(SideBarContext);
  const { setLoading, contract, balance, currentAddress } =
    useContext(DataContext);
  const [open, setOpen] = useState(false);

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
    console.log(data);

    //SEND TO CAMPAIGN
    setLoading(true);
    handleClose();
    await contract?.methods
      .addCampaign(
        data.address,
        data.charityName,
        data.title,
        data.desc,
        data.endDate,
        data.target,
        0,
        false,
        currentAddress
      )
      .send({ from: currentAddress });
    console.log("campaign added");
    setLoading(false);
    reset();
  };

  console.log(currentAddress);

  return (
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
                <Input {...register("target")} />
                <Error>{errors.target?.message}</Error>
              </TargetSection>
            </Section>
            <DialogActions>
              <Button onClick={handleClose}>Discard</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </FormWrap>
        </DialogContent>
      </Dialog>
      <LogoSection>
        <Menu sx={iconStyles} onClick={handleSideBarOpen} />
        <Logo>CrowdFundr.</Logo>
      </LogoSection>
      <AccountSection>
        {balance ? (
          <Section>
            <StartCampaign onClick={() => handleClickOpen()}>
              Start Campaign
            </StartCampaign>
            <BalanceSection>
              <EthLogo
                loading="lazy"
                src="https://media.tenor.com/8CnlmiFa-rAAAAAi/eth-ethereum.gif"
              />
              <EthAmount>{balance.substr(0, 5)}ETH</EthAmount>
            </BalanceSection>
          </Section>
        ) : (
          <Connect>Connect</Connect>
        )}
      </AccountSection>
    </HeaderWrap>
  );
};

export default Header;
