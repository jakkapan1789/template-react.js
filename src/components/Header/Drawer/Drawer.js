import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
const drawerWidth = 260;
const Drawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: 0,
    },
  },
}));

export default Drawer;
