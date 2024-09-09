import {
  Card,
  Grid,
  Typography,
  Button,
  Step,
  Stepper,
  Stack,
  Box,
} from "@mui/material";
import useDialog from "components/common/AlertDialog/AlertDialog";
import DialogExport from "components/common/DialogExport/DialogExport";
import { useState } from "react";
import HoverMenuButton from "components/common/Test/Test";
import PipelineStages from "components/common/PipelineStages/PipelineStages";
import FileUpload from "components/common/FileUpload/FileUpload";
import { Girl } from "@mui/icons-material";
const Component = () => {
  const [showDialog, DialogComponent] = useDialog();

  const alertSuccess = () => {
    showDialog({
      title: "Recorded successfully",
      message: `Recording date 20 July 2024 10:00 AM.`,
      icon: "success",
      btnConfirmText: "Ok",
    });
  };
  const alertError = () => {
    showDialog({
      title: "Unable to continue",
      message: `Please try again.`,
      icon: "error",
      btnConfirmText: "Ok",
    });
  };

  const alertConfirm = async () => {
    const result = await showDialog({
      title: "Confirmation",
      message: "Please confirm to save.",
      icon: "",
      btnConfirmText: "Ok",
      btnCancelText: "Cancel",
    });
    if (result) {
      // if yes, put logc here
      await showDialog({
        title: "Recorded successfully",
        message: `Recording date 20 July 2024 10:00 AM.`,
        icon: "success",
        btnConfirmText: "Ok",
      });
      console.log("confirm result", result);
    }
  };

  const [isExport, setIsExport] = useState(false);
  const [upload, setUpload] = useState();
  const handleFileChange = (file) => {
    setUpload(file);
  };

  const handleDeleteFile = () => {
    // console.log("file", file);
    setUpload(null);
  };

  return (
    <Grid container spacing={1}>
      {DialogComponent}
      <DialogExport open={isExport} handleClose={() => setIsExport(false)} />
      <Grid item xs={12} md={12} sm={12} sx={{ display: "flex" }}>
        <Typography sx={{ color: "#455A64", fontWeight: "bold" }}>
          Component
        </Typography>
      </Grid>

      <Grid item xs={12} sm={2} md={2} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
            // border: "1px dotted gray",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={alertSuccess}
            sx={{ mb: 1, textTransform: "none" }}
          >
            Alert Success
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={alertError}
            sx={{ mb: 1, textTransform: "none" }}
          >
            Alert Error
          </Button>
          <Button
            variant="contained"
            onClick={alertConfirm}
            sx={{ mb: 1, textTransform: "none" }}
          >
            Alert Confirm
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setIsExport(true)}
            sx={{ textTransform: "none" }}
          >
            Export File
          </Button>
        </Card>
      </Grid>

      <Grid item xs={12} sm={9} md={9} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
            alignItems: "center",
          }}
        >
          <PipelineStages />
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={3} md={3}>
              <FileUpload
                message="จำกัดขนาดไฟล์ไม่เกิน 1 MB ขนาด 1040*930"
                name={upload?.name}
                value={upload}
                onChange={handleFileChange}
                onDelete={handleDeleteFile}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component;
