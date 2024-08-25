import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function DialogExport({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (open) {
      setLoading(true);
      setFileName(getFilename);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const getFilename = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const name = `Report_${year}-${month}-${day}_${hours}${minutes}${seconds}.xlsx`;
    return name;
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose(event, reason);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleSnackbarClose}
      >
        <Alert
          severity="success"
          onClose={handleSnackbarClose}
          sx={{
            border: "1px solid green",
            padding: "12px",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          icon={
            loading ? (
              <CircularProgress size={20} color="success" />
            ) : (
              <CheckCircleIcon />
            )
          }
        >
          {loading ? "Generating....." : `Generated  ${fileName}`}
          {!loading && (
            <Button
              sx={{ ml: 1 }}
              color="success"
              size="small"
              variant="contained"
              onClick={() => handleClose()}
            >
              Download
            </Button>
          )}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
