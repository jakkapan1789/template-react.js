import React from "react";
import { Grid } from "@mui/material";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";
import { useLoading } from "context/hook";
import { useAxiosServices } from "lib/api";

// https://jsonplaceholder.typicode.com/todos
const Create = () => {
  const { apiService } = useAxiosServices();

  React.useEffect(() => {
    const fetching = async () => {
      try {
        const response = await apiService.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        console.log("res", response);
        // return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    fetching();
  }, []); // Added apiService as a dependency

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
