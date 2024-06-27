import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";

const RedIndicatorTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    // backgroundColor: theme.palette.error.main,
    backgroundColor: "#5C7E52",
  },
}));

export default RedIndicatorTabs;
