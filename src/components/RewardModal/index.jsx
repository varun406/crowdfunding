import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { generateRewardRequest } from "../../api/services/User";
import gif from "../../assets/images/gif/trophy.gif";
import { AuthContext } from "../../context/AuthContext";
import {
  Card,
  ClaimButton,
  H1,
  Note,
  NoteSection,
  Para,
  Troph,
} from "../../styles/RewardModal";
import axiosInstance from "../../api/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RewardModal = () => {
  const { user } = useContext(AuthContext);
  const { openRewardModal, setRewardModal, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/reward/single-reward?userId=${user}`
      );
      setStatus(res.data.message.rewardStatus);
    };
    getData();
  }, [user]);

  const handleClose = () => {
    setRewardModal(false);
  };

  const generateRequest = async () => {
    const res = await generateRewardRequest(user);
    setSnackbarOpen(true);
    setSnackbarMsg(res);
    setRewardModal(false);
  };

  return (
    <Dialog
      maxWidth="sm"
      open={openRewardModal}
      keepMounted
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Card>
        <Troph src={gif} />
        <H1>Earn Reward!</H1>
        <NoteSection>
          <Note>
            <b>NOTE: </b>You have to <b>donate aleast 5 campaigns</b> to be
            eligible for a reward.
            <br />
            <br />
            This reward will be processed first,and you will get this reward
            within 24 hours in your specified address
          </Note>
        </NoteSection>
        {status ? (
          <Para>
            <b>Reward request is "{status}"</b>
          </Para>
        ) : (
          <ClaimButton onClick={generateRequest}>Claim Reward</ClaimButton>
        )}
      </Card>
    </Dialog>
  );
};

export default RewardModal;
