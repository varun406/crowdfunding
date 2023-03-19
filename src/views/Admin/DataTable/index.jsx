import React from "react";
import {
  Address,
  Amount,
  CampaignName,
  DataSection,
  DataTableWrap,
  StatusButton,
} from "../../../styles/Admin/DataTable";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const DataTable = () => {
  return (
    <DataTableWrap>
      {/* <DataSection>
        <Address>0xb23d344C961fa85429c458bd97e435fad99220d3</Address>
        <CampaignName>Varunsdfdsfsdfsdfsdfdfsdf sdfsdf</CampaignName>
        <Amount>2.5</Amount>
        <StatusButton status="approve">Approve</StatusButton>
        <StatusButton status="reject">Reject</StatusButton>
      </DataSection> */}
    </DataTableWrap>
  );
};

export default DataTable;
