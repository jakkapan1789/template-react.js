import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { useNavigate } from "react-router-dom";

const useDialog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState({
    title: "",
    message: "",
    icon: "",
    btnRoutePush: null, // allow null here
  });
  const [resolve, setResolve] = useState(null);

  const showDialog = ({ title, message, icon, btnRoutePush = null }) => {
    setDialogData({ title, message, icon, btnRoutePush });
    setOpen(true);

    return new Promise((resolve) => {
      setResolve(() => resolve);
    });
  };

  const handleClose = (result) => {
    setOpen(false);
    if (resolve) {
      resolve(result);
    }
  };

  const DialogComponent = (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      open={open}
      // onClose={() => handleClose(false)}
      onClose={(event, reason) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          handleClose(false);
        }
      }}
      disableEscapeKeyDown={true}
    >
      <DialogContent>
        <Box
          sx={{
            pt: 2,
            pl: 2,
            pr: 2,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dialogData.icon === "success" ? (
              <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "#0EB70E" }} />
            ) : dialogData.icon === "error" ? (
              <InfoOutlinedIcon
                sx={{
                  fontSize: 60,
                  color: "#FFA10A",

                  transform: "rotate(180deg)",
                }}
              />
            ) : null}

            <Typography variant="h5" sx={{ fontWeight: "bold", pb: 1, pt: 1 }}>
              {dialogData.title}
            </Typography>
            <Typography>{dialogData.message}</Typography>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={1} sx={{ pl: 3, pr: 3, pb: 2 }}>
          {!dialogData.btnRoutePush ? (
            <>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleClose(false)}
                  //   color="error"
                  sx={{
                    color: "#5C7E52",
                    borderColor: "#5C7E52",
                    ":hover": { borderColor: "#5C7E52" },
                  }}
                  variant="outlined"
                  fullWidth
                >
                  ยกเลิก
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleClose(true)}
                  //   color="error"
                  sx={{ bgcolor: "#5C7E52", ":hover": { bgcolor: "#5C7E52" } }}
                  variant="contained"
                  autoFocus={false}
                  fullWidth
                >
                  {dialogData.title === "ยืนยันการอนุมัติ"
                    ? "ยืนยันอนุมัติ"
                    : dialogData.title === "ยืนยันการไม่อนุมัติ"
                    ? "ยืนยันไม่อนุมัติ"
                    : "ยินยัน"}
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Button
                  onClick={() => {
                    {
                      dialogData.btnRoutePush.url &&
                        navigate(dialogData.btnRoutePush.url);
                    }

                    handleClose(true);
                  }}
                  sx={{ bgcolor: "#5C7E52", ":hover": { bgcolor: "#5C7E52" } }}
                  variant="contained"
                  autoFocus={false}
                  fullWidth
                >
                  {dialogData.btnRoutePush.label}
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </DialogActions>
    </Dialog>
  );

  return [showDialog, DialogComponent];
};

export default useDialog;
