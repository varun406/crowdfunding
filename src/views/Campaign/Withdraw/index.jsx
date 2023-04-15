import React from "react";
import {
  RequestStatus,
  WithdrawButton,
  WithdrawWrap,
} from "../../../styles/Campaign/Fund";

const Withdraw = ({ requestStatus, SendRequest }) => {
  return (
    <WithdrawWrap>
      {requestStatus !== null && (
        <RequestStatus>
          Request Status: <b>{requestStatus}</b>
        </RequestStatus>
      )}
      {requestStatus === "approved" ? null : (
        <WithdrawButton onClick={SendRequest}>Request Withdraw</WithdrawButton>
      )}
    </WithdrawWrap>
  );
};

export default Withdraw;
