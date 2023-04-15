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
          Request Status: <span>{requestStatus}</span>
        </RequestStatus>
      )}
      {requestStatus === "rejected" ? (
        <WithdrawButton onClick={SendRequest}>Request Withdraw</WithdrawButton>
      ) : null}
    </WithdrawWrap>
  );
};

export default Withdraw;
