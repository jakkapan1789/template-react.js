import { styled } from "@mui/system";
const CustomBadge = styled("span")(({ theme, bgColor, color }) => ({
  backgroundColor: bgColor,
  color: color,
  padding: "3px 10px",
  borderRadius: "55px",
  marginLeft: 15,
  fontSize: 12,
}));

export default CustomBadge;
