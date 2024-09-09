import React from "react";
import { Grid } from "@mui/material";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

const Create = () => {
  return (
    <Grid container spacing={1} sx={{ position: "relative" }}>
      <Grid item xs={12} md={3} sm={3}>
        <LeftCard />
      </Grid>

      <Grid item xs={12} md={9} sm={9}>
        <RightCard />
      </Grid>
    </Grid>
  );
};

export default Create;
