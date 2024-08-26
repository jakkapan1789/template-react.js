import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Grid,
  Typography,
  IconButton,
  Divider,
  Card,
  Stack,
  Avatar,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon

export default function DrawerStage({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 350, p: 2 }}
      role="presentation"
      // onClick={() => toggleDrawer(false)}
      // onKeyDown={() => toggleDrawer(false)}
    >
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Typography sx={{ color: "#455A64", fontSize: 20 }}>
            Stage Name: PROD
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "right" }}>
          <IconButton onClick={() => toggleDrawer(false)} edge="end">
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ mt: 1 }} />
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
              flexGrow: 1,
              // p: 10,
              pl: 2,
              mt: 2,
              minHeight: 70,
              borderRadius: 0,

              overflow: "visible",
              // border: "1px dotted gray",
              border: "none",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Avatar alt="Remy Sharp" sx={{ width: 36, height: 36 }} />
              <Typography sx={{ color: "#455A64", ml: 1 }}>
                Jakkapan Pakeerat
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                mt: 2,
                borderRadius: 0,
              }}
            >
              <TextField label="Comment" multiline maxRows={4} />
            </Stack>

            {/* <TextField label="Comment" multiline maxRows={4} variant="filled" /> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
      sx={{ zIndex: 999999999 }}
    >
      {list()}
    </Drawer>
  );
}
