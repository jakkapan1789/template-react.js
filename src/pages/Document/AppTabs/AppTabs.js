import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomTabPanel from "components/common/CustomTabPanel/CustomTabPanel";
import CustomBadge from "components/common/CustomBadge/CustomBadge";
import RedIndicatorTabs from "components/common/RedIndicatorTabs/RedIndicatorTabs";
import Transition from "components/common/Transition/Transition";
import TableDocument from "components/common/TableDocument/TableDocument";
import DownloadIcon from "@mui/icons-material/Download";
import { useDocument } from "context/hook";
import useDialog from "components/common/AlertDialog/AlertDialog";
import rawData from "data/json/equipment.json";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AppTabs() {
  const { documents, setDocuments } = useDocument();
  const [showDialog, DialogComponent] = useDialog();
  const [rows, setRows] = React.useState([]);
  const { searchOption, searchValue } = useDocument();

  React.useEffect(() => {
    if (rawData.length >= 1) {
      let filteredRows = rawData;
      if (searchValue !== "") {
        if (searchOption === "id") {
          filteredRows = rawData.filter((f) =>
            f.id.toLowerCase().includes(searchValue.toLowerCase())
          );
        } else {
          filteredRows = rawData.filter((f) =>
            f.docNo.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
      }
      setRows(filteredRows);
    }
  }, [searchOption, searchValue]);

  const [openExport, setOpenExport] = React.useState(false);

  const handleOpenExport = () => setOpenExport(true);

  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const handleChange = (event, newValue) => {
    // Ensure the value is within the correct range of tabs
    if (newValue >= 0 && newValue <= 3) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {DialogComponent}
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
      >
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => handleOpenExport()}
          sx={{
            position: {
              xs: "static",
              sm: "static",
              md: "absolute",
              xl: "absolute",
            },
            width: { xs: "100%", sm: "100%", md: "auto", xl: "auto" },
            right: 0,
            top: 0,
            zIndex: 999,
            bgcolor: "#455A64",
            textTransform: "none",
            color: "white",
            ":hover": {
              bgcolor: "#455A64",
              color: "white",
            },
          }}
        >
          Download .xls
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
                    textTransform: "none",
                  }}
                >
                  All
                </span>
                <CustomBadge
                  bgColor={value === 0 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {rows.length}
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
                    textTransform: "none",
                  }}
                >
                  Actived
                </span>
                <CustomBadge
                  bgColor={value === 1 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {rows.filter((f) => f.status === 0).length}
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
                    textTransform: "none",
                  }}
                >
                  Disable
                </span>
                <CustomBadge
                  bgColor={value === 2 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {rows.filter((f) => f.status === 1).length}
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
                    textTransform: "none",
                  }}
                >
                  Unknown
                </span>
                <CustomBadge
                  bgColor={value === 3 ? "#5C7E52" : "#455A64"}
                  color="white"
                >
                  {rows.filter((f) => f.status === 2).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(3)}
          />
        </RedIndicatorTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Transition>{rows && <TableDocument rows={rows} />}</Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Transition>
          <TableDocument rows={rows.filter((f) => f.status === 0)} />
        </Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Transition>
          <TableDocument rows={rows.filter((f) => f.status === 1)} />
        </Transition>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Transition>
          <TableDocument rows={rows.filter((f) => f.status === 2)} />
        </Transition>
      </CustomTabPanel>
    </Box>
  );
}
