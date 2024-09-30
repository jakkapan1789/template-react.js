import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import MenuList from "./MenuList/MenuList";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    navigate("auth/login");
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{ p: 0.5 }}
        >
          <Box>
            <Stack
              direction="column"
              spacing={0.2}
              alignItems="center"
              sx={{ p: 0.1, cursor: "pointer" }}
              onClick={handleClick}
            >
              <Typography sx={{ fontSize: 16 }}>Jakkapan Pakeerat</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                IT (Admin)
              </Typography>
            </Stack>
          </Box>
          <MenuList
            anchorEl={anchorEl}
            open={open}
            onClick={handleClick}
            onClose={handleClose}
            onSignOut={handleLogout}
          />
        </Stack>
      </Box>
    </React.Fragment>
  );
}
