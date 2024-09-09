// import React from "react";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   Button,
//   Grid,
//   Box,
//   Typography,
//   Stack,
//   Zoom,
//   Divider,
//   TextField,
// } from "@mui/material";
// import useDialog from "components/common/AlertDialog/AlertDialog";

// const InsertDialog = ({ open, onClose }) => {
//   const [showDialog, DialogComponent] = useDialog();

//   const alertSuccess = () => {
//     const result = showDialog({
//       title: "Recorded successfully",
//       message: `Recording date 20 July 2024 10:00 AM.`,
//       icon: "success",
//       btnConfirmText: "Ok",
//     });
//     if (result) {
//       onClose();
//     }
//   };

//   return (
//     <>
//       {DialogComponent}
//       <Dialog
//         maxWidth={"sm"}
//         fullWidth
//         open={open}
//         onClose={(event, reason) => {
//           if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
//             onClose();
//           }
//         }}
//         TransitionComponent={Zoom}
//         disableEscapeKeyDown={true}
//       >
//         <DialogContent>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Typography variant="h6" sx={{ pb: 1, pt: 1, color: "#455A64" }}>
//               Add Equipment Type
//             </Typography>
//             <Divider sx={{ width: "100%", mb: 2 }} />

//             <Stack
//               direction={"row"}
//               sx={{ display: "flex", alignItems: "center", width: "100%" }}
//             >
//               <Grid container spacing={1}>
//                 <Grid item xs={12} sm={12} md={12}>
//                   <Stack direction={"column"}>
//                     <Typography sx={{ color: "#455A64", fontSize: "16px" }}>
//                       Name
//                     </Typography>
//                     <TextField size="small" placeholder="Enter Name" />
//                   </Stack>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12}>
//                   <Stack direction={"column"}>
//                     <Typography sx={{ color: "#455A64", fontSize: "16px" }}>
//                       Remark
//                     </Typography>
//                     <TextField size="small" placeholder="Enter Remark" />
//                   </Stack>
//                 </Grid>
//               </Grid>
//             </Stack>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Grid container spacing={1} sx={{ pl: 3, pr: 3, pb: 2, pt: 2 }}>
//             <Grid item xs={6}></Grid>
//             <Grid item xs={6}>
//               <Stack direction={"row"}>
//                 <Button
//                   onClick={() => onClose()}
//                   sx={{
//                     color: "#5C7E52",
//                     borderColor: "#5C7E52",
//                     ":hover": { borderColor: "#5C7E52" },
//                     textTransform: "none",
//                     mr: 0.5,
//                   }}
//                   variant="outlined"
//                   fullWidth
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   onClick={() => alertSuccess()}
//                   sx={{
//                     bgcolor: "#5C7E52",
//                     ":hover": { bgcolor: "#5C7E52" },
//                     textTransform: "none",
//                   }}
//                   variant="contained"
//                   autoFocus={false}
//                   fullWidth
//                 >
//                   Save
//                 </Button>
//               </Stack>
//             </Grid>
//           </Grid>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default InsertDialog;

import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  Box,
  Typography,
  Stack,
  Zoom,
  Divider,
  TextField,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useDialog from "components/common/AlertDialog/AlertDialog";

const InsertDialog = ({ open, onClose }) => {
  const [showDialog, DialogComponent] = useDialog();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    remark: Yup.string().required("Remark is required"),
  });

  const alertSuccess = () => {
    const result = showDialog({
      title: "Recorded successfully",
      message: `Recording date 20 July 2024 10:00 AM.`,
      icon: "success",
      btnConfirmText: "Ok",
    });
    if (result) {
      onClose();
    }
  };
  return (
    <>
      {DialogComponent}
      <Dialog
        maxWidth={"sm"}
        fullWidth
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            onClose();
          }
        }}
        TransitionComponent={Zoom}
        disableEscapeKeyDown={true}
      >
        <Formik
          initialValues={{ name: "", remark: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alertSuccess();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <DialogContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ pb: 1, pt: 1, color: "#455A64" }}
                  >
                    Add Equipment Type
                  </Typography>
                  <Divider sx={{ width: "100%", mb: 2 }} />

                  <Stack
                    direction={"row"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Stack direction={"column"}>
                          <Typography
                            sx={{ color: "#455A64", fontSize: "16px" }}
                          >
                            Name
                          </Typography>
                          <Field
                            as={TextField}
                            size="small"
                            name="name"
                            placeholder="Enter Name"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Stack direction={"column"}>
                          <Typography
                            sx={{ color: "#455A64", fontSize: "16px" }}
                          >
                            Remark
                          </Typography>
                          <Field
                            as={TextField}
                            size="small"
                            name="remark"
                            placeholder="Enter Remark"
                            error={touched.remark && Boolean(errors.remark)}
                            helperText={touched.remark && errors.remark}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </DialogContent>
              <DialogActions>
                <Grid container spacing={1} sx={{ pl: 3, pr: 3, pb: 2, pt: 2 }}>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Stack direction={"row"}>
                      <Button
                        onClick={() => onClose()}
                        sx={{
                          color: "#5C7E52",
                          borderColor: "#5C7E52",
                          ":hover": { borderColor: "#5C7E52" },
                          textTransform: "none",
                          mr: 0.5,
                        }}
                        variant="outlined"
                        fullWidth
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        sx={{
                          bgcolor: "#5C7E52",
                          ":hover": { bgcolor: "#5C7E52" },
                          textTransform: "none",
                        }}
                        variant="contained"
                        autoFocus={false}
                        fullWidth
                      >
                        Save
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default InsertDialog;
