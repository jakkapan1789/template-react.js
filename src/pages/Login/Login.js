// import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Grid,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Transition from "components/common/Transition/Transition";
// import useDialog from "components/common/AlertDialog/AlertDialog";
// import getLPTheme from "data/getLPTheme";
// import { useNavigate } from "react-router-dom";

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required("Username is required"),
//   password: Yup.string().required("Password is required"),
// });

// export default function Login() {
//   const [showDialog, DialogComponent] = useDialog();
//   const LPtheme = createTheme(getLPTheme("light"));
//   const navigate = useNavigate();

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     const hardcodedUsername = "user";
//     const hardcodedPassword = "1234";

//     try {
//       if (
//         values.username === hardcodedUsername &&
//         values.password === hardcodedPassword
//       ) {
//         const expirationDate = new Date(
//           new Date().getTime() + 8 * 60 * 60 * 1000
//         );
//         localStorage.setItem("token", "fake-jwt-token", {
//           expires: expirationDate,
//         });
//         localStorage.setItem(
//           "user",
//           JSON.stringify({ username: values.username })
//         );
//         navigate("/");
//       } else {
//         await showDialog({
//           title: "Login Failed",
//           message: "Invalid username or password",
//           icon: "info",
//           btnRoutePush: {
//             enable: true,
//             label: "Close",
//             url: "",
//           },
//         });
//       }
//     } catch (error) {
//       await showDialog({
//         title: "Error",
//         message: "An unexpected error occurred.",
//         icon: "info",
//         btnRoutePush: {
//           enable: true,
//           label: "Close",
//           url: "",
//         },
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Transition>
//       <ThemeProvider theme={LPtheme}>
//         {DialogComponent}
//         <Grid
//           container
//           spacing={0}
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//           style={{ minHeight: "90vh" }}
//         >
//           <Grid
//             item
//             xs={11}
//             sm={8}
//             md={6}
//             lg={4}
//             xl={3}
//             sx={{
//               mx: { xs: 3, sm: 3, md: 2 },
//             }}
//           >
//             <Card sx={{ width: { md: "450px", backgroundColor: "#F8F8F9" } }}>
//               <CardContent>
//                 <Box sx={{ display: "flex", justifyContent: "center" }}>
//                   <Stack direction="column" spacing={0.5} alignItems="center">
//                     <Typography
//                       variant="h4"
//                       gutterBottom
//                       sx={{ color: "gray" }}
//                     >
//                       Web Template
//                     </Typography>
//                   </Stack>
//                 </Box>

//                 <Grid sx={{ marginTop: 2, marginBottom: 2 }}>
//                   <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                   >
//                     {({ errors, touched, isSubmitting }) => (
//                       <Form>
//                         <Field
//                           as={TextField}
//                           fullWidth
//                           label="Username"
//                           size="small"
//                           variant="outlined"
//                           placeholder="Your username"
//                           name="username"
//                           autoComplete={false}
//                           error={touched.username && Boolean(errors.username)}
//                           helperText={touched.username && errors.username}
//                         />
//                         <Field
//                           sx={{ marginTop: 2 }}
//                           as={TextField}
//                           fullWidth
//                           label="Password"
//                           size="small"
//                           variant="outlined"
//                           type="password"
//                           placeholder="Your password"
//                           name="password"
//                           error={touched.password && Boolean(errors.password)}
//                           helperText={touched.password && errors.password}
//                         />
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           sx={{
//                             bgcolor: "#5C7E52",
//                             ":hover": { bgcolor: "#5C7E52" },
//                             textTransform: "none",
//                             marginTop: "16px",
//                           }}
//                           fullWidth
//                           size="medium"
//                           disabled={isSubmitting}
//                         >
//                           Login
//                         </Button>
//                       </Form>
//                     )}
//                   </Formik>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     </Transition>
//   );
// }

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Transition from "components/common/Transition/Transition";
import useDialog from "components/common/AlertDialog/AlertDialog";
import getLPTheme from "data/getLPTheme";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [showDialog, DialogComponent] = useDialog();
  const LPtheme = createTheme(getLPTheme("light"));
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const hardcodedUsername = "user";
    const hardcodedPassword = "1234";

    try {
      if (
        values.username === hardcodedUsername &&
        values.password === hardcodedPassword
      ) {
        const expirationDate = new Date(
          new Date().getTime() + 8 * 60 * 60 * 1000
        );
        localStorage.setItem("token", "fake-jwt-token", {
          expires: expirationDate,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({ username: values.username })
        );
        navigate("/");
      } else {
        await showDialog({
          title: "Login Failed",
          message: `Invalid username or password.`,
          icon: "error",
          btnConfirmText: "Ok",
        });
      }
    } catch (error) {
      await showDialog({
        title: "Error",
        message: `An unexpected error occurred.`,
        icon: "error",
        btnConfirmText: "Ok",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Transition>
      <ThemeProvider theme={LPtheme}>
        {DialogComponent}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "90vh" }}
        >
          <Grid
            item
            xs={11}
            sm={8}
            md={6}
            lg={4}
            xl={3}
            sx={{
              mx: { xs: 3, sm: 3, md: 2 },
            }}
          >
            <Card sx={{ width: { md: "450px", backgroundColor: "#F8F8F9" } }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Stack direction="column" spacing={0.5} alignItems="center">
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: "gray" }}
                    >
                      Web Template
                    </Typography>
                  </Stack>
                </Box>

                <Grid sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Username"
                          size="small"
                          variant="outlined"
                          placeholder="Your username"
                          name="username"
                          autoComplete="off"
                          error={touched.username && Boolean(errors.username)}
                          helperText={touched.username && errors.username}
                        />
                        <Field
                          sx={{ marginTop: 2 }}
                          as={TextField}
                          fullWidth
                          label="Password"
                          size="small"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          placeholder="Your password"
                          name="password"
                          autoComplete="off"
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            bgcolor: "#5C7E52",
                            ":hover": { bgcolor: "#5C7E52" },
                            textTransform: "none",
                            marginTop: "16px",
                          }}
                          fullWidth
                          size="medium"
                          disabled={isSubmitting}
                        >
                          Login
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Transition>
  );
}
