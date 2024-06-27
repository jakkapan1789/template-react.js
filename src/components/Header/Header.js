import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import Profile from "./Profile/Profile";
import Drawer from "./Drawer/Drawer";
import AppBar from "./AppBar/AppBar";
import navigationConfig from "../../data/navigation";
import { useNavigate, NavLink } from "react-router-dom";

const textStyle = {
  fontSize: 16,
  color: "white",
  borderRadius: 10,
  fontFamily: "Kanit",
};
const menuStyle = {
  py: "4px",
  px: "12px",
  borderRadius: 5,
};

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#5C7E52",
            // background:
            //   "linear-gradient(to right, #F11A1A 70%, #F11A1A 20%, #9E0646 99%, #9E0646 100%);",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navigationConfig.map((nav, index) => (
              <MenuItem
                key={index}
                sx={menuStyle}
                onClick={() => navigate(nav.path)}
              >
                <Typography variant="body2" sx={textStyle}>
                  {nav.label}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          <Stack direction={"row"} spacing={1}>
            <Stack
              direction={"column"}
              sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
            >
              {/* {!session ? (
                <MenuItem onClick={() => router.push("/auth/signin")}>
                  <Typography sx={textStyle}>Sign in</Typography>
                </MenuItem>
              ) : (
                <Profile />
              )} */}
              <Profile />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
            bgcolor: "#F8F8F9",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              bgcolor: "#F8F8F9",
              height: "100%",
              width: "auto",
            }}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <span
                className="logo-fbn"
                style={{
                  cursor: "pointer",
                  marginRight: "8px",
                  marginLeft: "13px",
                }}
              ></span>

              <Box
                sx={{
                  height: "100%",
                  borderLeft: "1px solid #BDBDBD",
                  color: "transparent",
                }}
              >
                {` `} |
              </Box>
              <Stack
                direction="column"
                spacing={-1}
                alignItems="left"
                sx={{ p: 0.5, pl: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#5C7E52",
                  }}
                >
                  Web Template
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  sx={{ fontSize: 16, color: "#808285" }}
                >
                  PLATFORM
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
        <Divider />
      </Drawer>
    </>
  );
}

export default Header;
