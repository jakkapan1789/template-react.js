import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { ButtonBase, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "../MenuList/MenuList";
export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // signOut();
    handleClose();
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
              <Typography sx={{ fontSize: 16 }}>Nopporn Pakeerat</Typography>
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
