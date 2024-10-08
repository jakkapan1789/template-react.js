import React from "react";
import { Menu, MenuItem, ListItemIcon, Divider, Avatar } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";

const MenuList = ({ anchorEl, open, onClose, onSignOut }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      autoFocus={false}
      id="account-menu"
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: 200,
          overflow: "visible",
          bgcolor: "white",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.35))",
          mt: 0.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Avatar src={"image"} /> My account
      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem
        onClick={() => {
          onSignOut();
          onClose();
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default MenuList;
