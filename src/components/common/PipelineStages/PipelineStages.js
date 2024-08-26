// import React from "react";
// import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import BoltIcon from "@mui/icons-material/Bolt";

// const stages = [
//   { label: "DEV", jobs: "1 job, 3 tasks" },
//   { label: "UAT", jobs: "1 job, 3 tasks" },
//   { label: "PROD", jobs: "1 job, 3 tasks" },
// ];

// const PipelineStages = () => {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{ display: "flex", justifyContent: "center" }}
//     >
//       {stages.map((stage, index) => (
//         <Grid item key={index}>
//           <Card
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               minWidth: 200,
//               padding: "16px",
//               borderRadius: "8px",
//               borderTop: "3px solid #1976d2",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               position: "relative",
//             }}
//           >
//             {/* <IconButton
//               sx={{
//                 position: "absolute",
//                 top: -20,
//                 left: -20,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 zIndex: 1,
//               }}
//             >
//               <BoltIcon />
//             </IconButton> */}
//             <CardContent sx={{ textAlign: "center" }}>
//               <Typography variant="h6">{stage.label}</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {stage.jobs}
//               </Typography>
//             </CardContent>
//             <IconButton
//               sx={{
//                 position: "absolute",
//                 top: -20,
//                 right: -20,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 zIndex: 1,
//               }}
//             >
//               <PersonIcon />
//             </IconButton>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default PipelineStages;

// import React from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
//   Box,
//   Stepper,
//   Step,
// } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import BoltIcon from "@mui/icons-material/Bolt";

// const stages = [
//   { label: "Dev Plan", jobs: "1 job, 3 tasks" },
//   { label: "Dev Apply", jobs: "1 job, 3 tasks" },
//   { label: "Test Plan", jobs: "1 job, 3 tasks" },
// ];

// const PipelineStages = () => {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{ display: "flex", justifyContent: "center" }}
//     >
//       <Stepper>
//         {stages.map((stage, index) => (
//           <Step key={index}>
//             <Grid item key={index}>
//               <Box sx={{ position: "relative", display: "inline-flex" }}>
//                 <Card
//                   sx={{
//                     minWidth: 200,
//                     padding: "16px",
//                     borderRadius: "8px",
//                     borderTop: "3px solid #1976d2",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <CardContent sx={{ textAlign: "center" }}>
//                     <Typography variant="h6">{stage.label}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {stage.jobs}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "-20px",
//                     transform: "translateY(-50%)",
//                     backgroundColor: "white",
//                     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                     width: 40,
//                     height: 40,
//                     zIndex: 1,
//                     "&:hover": {
//                       backgroundColor: "white",
//                       opacity: 1,
//                     },
//                   }}
//                 >
//                   <BoltIcon />
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: "50%",
//                     right: "-20px",
//                     transform: "translateY(-50%)",
//                     backgroundColor: "white",
//                     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                     width: 40,
//                     height: 40,
//                     zIndex: 1,
//                     "&:hover": {
//                       backgroundColor: "white",
//                       opacity: 1,
//                     },
//                   }}
//                 >
//                   <PersonIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
//           </Step>
//         ))}
//       </Stepper>
//     </Grid>
//   );
// };

// export default PipelineStages;

import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import { ImageOutlined } from "@mui/icons-material";
import DrawerStage from "../DrawerStage/DrawerStage";

const stages = [
  { label: "DEV", jobs: "Succeeded" },
  { label: "UAT", jobs: "Waiting approve" },
  { label: "PROD", jobs: "Not deploy yet" },
];
const PipelineStages = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <DrawerStage open={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <Grid item>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <Card
                sx={{
                  minWidth: 200,
                  padding: "16px",
                  borderRadius: "8px",
                  borderTop: "3px solid #1976d2",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{stage.label}</Typography>
                  <Typography
                    variant="body2"
                    //   color="textSecondary"
                    sx={{
                      color: stage.jobs === "Succeeded" ? "green" : "gray",
                    }}
                  >
                    {stage.jobs}
                  </Typography>
                  {stage.jobs === "Succeeded" && (
                    <Typography variant="body2" color="textSecondary">
                      on 26/02/2024 17:00
                    </Typography>
                  )}
                </CardContent>
              </Card>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "-20px",
                  transform: "translateY(-50%)",
                  backgroundColor: "green",
                  backgroundColor:
                    stage.jobs == "Succeeded" ? "green" : "white",
                  color: stage.jobs == "Succeeded" && "white",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: 40,
                  height: 40,
                  zIndex: 1,
                  "&:hover": {
                    backgroundColor:
                      stage.jobs == "Succeeded" ? "green" : "white",
                    color: stage.jobs == "Succeeded" && "white",
                    opacity: 1,
                  },
                }}
              >
                <BoltIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "-20px",
                  transform: "translateY(-50%)",
                  backgroundColor:
                    stage.jobs == "Succeeded" ? "green" : "white",
                  color: stage.jobs == "Succeeded" && "white",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: 40,
                  height: 40,
                  zIndex: 1,
                  "&:hover": {
                    backgroundColor:
                      stage.jobs == "Succeeded" ? "green" : "white",
                    color: stage.jobs == "Succeeded" && "white",
                    opacity: 1,
                  },
                }}
                onClick={() => toggleDrawer(true)}
              >
                <PersonIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Add a connecting line between cards, except after the last card */}
          {index < stages.length - 1 && (
            <Grid item>
              <Box
                sx={{
                  height: "3px",
                  width: "50px",
                  backgroundColor: "#e0e0e0",
                }}
              />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default PipelineStages;
