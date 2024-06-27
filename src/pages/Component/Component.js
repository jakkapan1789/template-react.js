import { Card, Grid, Typography } from "@mui/material";

const Component = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} sm={12} sx={{ display: "flex" }}>
        <Typography sx={{ color: "#455A64", fontWeight: "bold" }}>
          Component
        </Typography>
      </Grid>

      <Grid item xs={12} sm={3} md={3} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
          }}
        >
          xx
        </Card>
      </Grid>
      <Grid item xs={12} sm={9} md={9} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
          }}
        >
          xx
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component;
