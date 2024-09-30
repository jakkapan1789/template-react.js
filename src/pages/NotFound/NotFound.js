import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Transition from "components/common/Transition/Transition";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Transition>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          404
        </Typography>
        <Typography variant="h4" color="textSecondary" sx={{ marginBottom: 2 }}>
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          sx={{
            bgcolor: "#5C7E52",
            ":hover": { bgcolor: "#5C7E52" },
            textTransform: "none",
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Transition>
  );
}
