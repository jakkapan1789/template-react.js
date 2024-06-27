import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
const ChanelTooltip = ({ value, content }) => {
  return (
    <Tooltip
      title={
        <React.Fragment>
          <Typography variant="body2" sx={{ fontSize: 12, fontWeight: "bold" }}>
            5 ช่องทาง
          </Typography>
          <Box sx={{ mt: 0.5 }}>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              1. Banner บน เว็บไซต์และ แอปพลิเคชั่น Prompt Plus
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              2. Line OA
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              3. SMS
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              4. Notification บน Prompt Plus
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              5. Notification บน Chang Family
            </Typography>
          </Box>
        </React.Fragment>
      }
      arrow
    >
      <Chip label={value} />
    </Tooltip>
  );
};

export default ChanelTooltip;
