import { Card, Grid, Typography, Button } from "@mui/material";
import useDialog from "components/common/AlertDialog/AlertDialog";
const Component = () => {
  const [showDialog, DialogComponent] = useDialog();

  const alertSuccess = () => {
    showDialog({
      title: "บันทึกเรียบร้อยแล้ว",
      message: `วันเวลาบันทึก 20 กรกฏาคม, 2024, 10:00 AM`,
      icon: "success",
      btnRoutePush: {
        enable: true,
        label: "ตกลง",
        url: "",
      },
    });
  };
  const alertError = () => {
    showDialog({
      title: "ไม่สามารถดำเนินการต่อได้",
      message: `กรุณาลองใหม่อีกครั้ง`,
      icon: "error",
      btnRoutePush: {
        enable: true,
        label: "ตกลง",
        url: "",
      },
    });
  };

  const alertConfirm = () => {
    const result = showDialog({
      title: "การยืนยัน",
      message: "กรุณายืนยันเพื่อบันทึก",
      icon: "",
    });
    if (result) {
      // if yes, put logc here
      console.log("confirm result", result);
    }
  };
  return (
    <Grid container spacing={1}>
      {DialogComponent}
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
            sx={{ textTransform: "none" }}
          >
            Alert Confirm
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} sm={9} md={9} sx={{ display: "flex" }}>
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
          }}
        >
          xx
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component;
