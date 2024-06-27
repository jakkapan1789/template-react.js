import { Chip } from "@mui/material";
// assume status 1 = approved, 2 = pedding, 3 = draft, 4 = reject
const ChipStatus = ({ status }) => {
  return (
    <Chip
      label={
        status === 1
          ? `Approved`
          : status === 2
          ? "Waiting Approve"
          : status === 3
          ? "Draft"
          : status === 4
          ? "Reject"
          : `Unknown`
      }
      size="small"
      sx={{
        border: `0.5px solid ${
          status === 1
            ? "#1877F2"
            : status === 2
            ? "#FF852C"
            : status === 3
            ? ""
            : status === 4
            ? "#E1251B"
            : ""
        }`,
        color:
          status === 1
            ? "#1877F2"
            : status === 2
            ? "#FF852C"
            : status === 3
            ? ""
            : status === 4
            ? "#E1251B"
            : "",
        bgcolor:
          status === 1
            ? "#E8F0FF"
            : status === 2
            ? "#FFF8E1"
            : status === 3
            ? ""
            : status === 4
            ? "#FFD3D3"
            : "",
      }}
    />
  );
};

export default ChipStatus;
