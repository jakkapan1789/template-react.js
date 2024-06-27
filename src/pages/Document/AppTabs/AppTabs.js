/* eslint-disable */
import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import CustomTabPanel from "components/common/CustomTabPanel/CustomTabPanel";
import CustomBadge from "components/common/CustomBadge/CustomBadge";
import RedIndicatorTabs from "components/common/RedIndicatorTabs/RedIndicatorTabs";

import Transition from "components/common/Transition/Transition";
import TableDocument from "components/common/TableDocument/TableDocument";
// import { useDocument } from "@/context/DocumentContext";
import DownloadIcon from "@mui/icons-material/Download";
// import { useLoading } from "@/context/LoadingContext";
function createData(
  campaignId,
  communicationId,
  programName,
  createBy,
  createData,
  chanels,
  status
) {
  return {
    campaignId,
    communicationId,
    programName,
    createBy,
    createData,
    chanels,
    status,
  };
}

const rows = [
  createData(
    "CP000001",
    "CM000001",
    "สื่อสารทั่วไป",
    "Jakkapan Pakeerat",
    "01/06/2567",
    "5",
    1
  ),
  createData(
    "CP000002",
    "CM000002",
    "สื่อสารทั่วไป",
    "Jakkapan Pakeerat",
    "01/06/2567",
    "5",
    2
  ),
  createData(
    "CP000003",
    "CM000003",
    "สื่อสารทั่วไป",
    "Jakkapan Pakeerat",
    "02/05/2567",
    "5",
    3
  ),
  createData(
    "CP000004",
    "CM000004",
    "สื่อสารทั่วไป",
    "Jakkapan Pakeerat",
    "11/06/2567",
    "5",
    4
  ),
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AppTabs() {
  //   const { documents, setDocuments } = useDocument();
  //   const { isLoading, startLoading, stopLoading } = useLoading();

  const [documents, setDocuments] = React.useState([]);

  React.useEffect(() => {
    setDocuments(() => rows);
  }, [rows]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
      >
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 999,
            bgcolor: "#455A64",
            color: "white",
            ":hover": {
              bgcolor: "#455A64",
              color: "white",
            },
          }}
        >
          ดาวน์โหลด .xls
        </Button>

        <RedIndicatorTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: value === 0 ? "#5C7E52" : "#616161",
                    textTransform: "capitalize",
                  }}
                >
                  Total
                </span>
                <CustomBadge
                  bgColor={value === 0 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {documents.length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: value === 1 ? "#5C7E52" : "#616161",
                    textTransform: "capitalize",
                  }}
                >
                  Waiting Approve
                </span>
                <CustomBadge
                  bgColor={value === 1 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {documents.filter((f) => f.status === 1).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(1)}
          />

          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: value === 2 ? "#5C7E52" : "#616161",
                    textTransform: "capitalize",
                  }}
                >
                  Approved
                </span>
                <CustomBadge
                  bgColor={value === 2 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {documents.filter((f) => f.status === 2).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(2)}
          />

          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: value === 3 ? "#5C7E52" : "#616161",
                    textTransform: "capitalize",
                  }}
                >
                  Reject
                </span>
                <CustomBadge
                  bgColor={value === 3 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {documents.filter((f) => f.status === 4).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(3)}
          />
        </RedIndicatorTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Transition>
          {documents.length !== 0 ? <TableDocument rows={documents} /> : null}
        </Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Transition>
          <TableDocument rows={documents.filter((f) => f.status === 2)} />
        </Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Transition>
          <TableDocument rows={documents.filter((f) => f.status === 1)} />
        </Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Transition>
          <TableDocument rows={documents.filter((f) => f.status === 4)} />
        </Transition>
      </CustomTabPanel>
    </Box>
  );
}
