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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AppTabs() {
  // const { Document } = useCommuService();
  const { documents, setDocuments } = useDocument();
  // const { isLoading, startLoading, stopLoading } = useLoading();
  const [showDialog, DialogComponent] = useDialog();
  const [rows, setRows] = React.useState([]);
  const { searchOption, searchValue, startTime, endTime } = useDocument();

  React.useEffect(() => {
    if (documents.length >= 1) {
      let filteredRows = documents;
      if (searchValue !== "") {
        if (searchOption === "campaignId") {
          filteredRows = documents.filter((f) =>
            f.campaign_code.toLowerCase().includes(searchValue.toLowerCase())
          );
        } else {
          filteredRows = documents.filter((f) =>
            f.communication_code
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        }
      }

      if (startTime && endTime) {
        const startDate = new Date(startTime);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(endTime);
        endDate.setHours(0, 0, 0, 0);

        filteredRows = documents.filter((f) => {
          const createdDate = new Date(f.created_at_display);
          createdDate.setHours(0, 0, 0, 0);

          if (startDate.getTime() === endDate.getTime()) {
            return createdDate.getTime() === startDate.getTime();
          }

          return createdDate >= startDate && createdDate <= endDate;
        });
      }
      setRows(filteredRows);
    }
  }, [searchOption, searchValue, startTime, endTime]);

  const [openExport, setOpenExport] = React.useState(false);

  const handleOpenExport = () => setOpenExport(true);
  const handleCloseExport = (event, reason) => setOpenExport(false);

  // React.useEffect(() => {
  //   const fetchDocument = async () => {
  //     try {
  //       // startLoading();
  //       setRows([]);
  //       setDocuments([]);
  //       const result = await Document.toList();
  //       if (result.status === 200) {
  //         // stopLoading();
  //         setRows(result.data);
  //         setDocuments(result.data);
  //       }
  //     } catch (error) {
  //       // stopLoading();
  //       await showDialog({
  //         title: `ข้อผิดพลาด ${error.response.status}`,
  //         message: error.response.data.error,
  //         icon: "info",
  //         btnRoutePush: {
  //           enable: true,
  //           label: "ปิด",
  //           url: "",
  //         },
  //       });
  //     } finally {
  //       // stopLoading();
  //     }
  //   };

  //   fetchDocument();
  // }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <DialogExport
        open={openExport}
        handleClose={handleCloseExport}
        filter={value}
        data={rows}
      /> */}
      {DialogComponent}
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
      >
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => handleOpenExport()}
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
                <span style={{ color: value === 0 ? "red" : "#616161" }}>
                  ทั้งหมด
                </span>
                <CustomBadge
                  bgColor={value === 0 ? "red" : "#455A64"}
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
                <span style={{ color: value === 1 ? "red" : "#616161" }}>
                  แบบร่าง
                </span>
                <CustomBadge
                  bgColor={value === 1 ? "red" : "#455A64"}
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
                <span style={{ color: value === 2 ? "red" : "#616161" }}>
                  รออนุมัติ
                </span>
                <CustomBadge
                  bgColor={value === 2 ? "red" : "#455A64"}
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
                <span style={{ color: value === 3 ? "red" : "#616161" }}>
                  อนุมัติแล้ว
                </span>
                <CustomBadge
                  bgColor={value === 3 ? "red" : "#455A64"}
                  color="white"
                >
                  {rows.filter((f) => f.status === 2).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(3)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: value === 4 ? "red" : "#616161" }}>
                  ไม่อนุมัติ
                </span>
                <CustomBadge
                  bgColor={value === 4 ? "red" : "#455A64"}
                  color="white"
                >
                  {rows.filter((f) => f.status === 3).length}
                </CustomBadge>
              </div>
            }
            {...a11yProps(4)}
          />
        </RedIndicatorTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Transition>
          {rows.length !== 0 ? <TableDocument rows={rows} /> : null}
        </Transition>
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
      <CustomTabPanel value={value} index={4}>
        <Transition>
          <TableDocument rows={rows.filter((f) => f.status === 3)} />
        </Transition>
      </CustomTabPanel>
    </Box>
  );
}
