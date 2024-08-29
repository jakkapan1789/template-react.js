import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "context/hook";

const BackdropLoader = () => {
  const { isLoading } = useLoading();

  return (
    <Backdrop
      sx={{
        zIndex: 99999,
        backdropFilter: "blur(0.1px)",
      }}
      open={isLoading}
    >
      <CircularProgress size={60} sx={{ color: "#00712D" }} />
    </Backdrop>
  );
};

export default BackdropLoader;
