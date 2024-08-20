import { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import TopSpenders from "components/common/TopSpenders";
const rewards = ["Toy Car", "Stuffed Animal", "Candy", "Book", "Gift Card"];
const Dashboard = () => {
  const [reward, setReward] = useState(null);

  const handleOpenBox = () => {
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    setReward(randomReward);
  };
  return (
    // <Grid container spacing={1}>
    //   <Grid item xs={12} md={12} sm={12} sx={{ display: "flex" }}>
    //     <Typography sx={{ color: "#455A64", fontWeight: "bold" }}>
    //       Dashboard
    //     </Typography>
    //   </Grid>

    //   <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
    //     <Card
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         flexGrow: 1,
    //         p: 1,
    //         bgcolor: "white",
    //         overflow: "visible",
    //         borderRadius: "8px",
    //       }}
    //     >
    //       <h1>Treasure Wheel</h1>
    //     </Card>
    //   </Grid>
    // </Grid>
    // <TopSpenders />
    <></>
  );
};

export default Dashboard;
