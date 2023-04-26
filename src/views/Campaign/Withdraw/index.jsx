import React from "react";
import {
  Note,
  RequestStatus,
  SectionWrap,
  WithdrawButton,
  WithdrawWrap,
} from "../../../styles/Campaign/Fund";
import { NoteSection } from "../../../styles/RewardModal";
import moment from "moment";

const Withdraw = ({ requestStatus, SendRequest, isCampaignEnded }) => {
  console.log(moment(new Date()).unix());
  return (
    <WithdrawWrap>
      {requestStatus !== null && (
        <RequestStatus>
          Request Status: <span>{requestStatus}</span>
        </RequestStatus>
      )}
      {requestStatus ? (
        requestStatus === "rejected" ? (
          <WithdrawButton onClick={SendRequest}>
            Request Withdraw
          </WithdrawButton>
        ) : (
          <Note>
            <b>Note:</b> Request button will be available after campaign ends.
          </Note>
        )
      ) : (
        <SectionWrap>
          <NoteSection>
            <Note>
              <b>Note:</b> Request button will be available after campaign ends.
            </Note>
          </NoteSection>
          <WithdrawButton onClick={SendRequest}>
            Request Withdraw
          </WithdrawButton>
        </SectionWrap>
      )}
    </WithdrawWrap>
  );
};

export default Withdraw;
