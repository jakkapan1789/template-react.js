import React from "react";
import { Card, Grid, Typography, Box, Stack, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const LeftCard = () => {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        position: "sticky",
        top: 72,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
          <Stack
            direction={"row"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/document")}
          >
            <ArrowBackIcon sx={{ color: "#455A64" }} />
            <Typography
              sx={{
                color: "#455A64",
                fontWeight: "bold",
                marginLeft: 0.5,
              }}
            >
              Back
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item sm={12} md={12} xs={12}>
              <Card>
                <Box sx={{ p: 2 }}>
                  <Typography
                    sx={{ color: "#455A64", fontWeight: "bold" }}
                    variant="body2"
                  >
                    Equipment No.
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#455A64", fontWeight: "bold" }}
                    >
                      ID :
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F11A1A",
                        fontWeight: "bold",
                      }}
                      variant="body2"
                    >
                      EQ-00001
                    </Typography>
                  </Stack>
                </Box>
                <Divider
                  variant="middle"
                  sx={{
                    borderStyle: "dashed",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#455A64", fontWeight: "bold" }}
                    >
                      Created by :
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#455A64" }}>
                      Jakkapan Pakeerat
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#455A64", fontWeight: "bold" }}
                    >
                      Create Date :
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#455A64" }}>
                      2024/09/30
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#455A64", fontWeight: "bold" }}
                    >
                      Date Update :
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#455A64" }}>
                      2024/09/30
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftCard;
