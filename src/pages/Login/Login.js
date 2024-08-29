// import "@/styles/globals.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import getLPTheme from "data/getLPTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Transition from "components/common/Transition/Transition";
import useDialog from "components/common/AlertDialog/AlertDialog";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [showDialog, DialogComponent] = useDialog();
  const LPtheme = createTheme(getLPTheme("light"));

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      //   const result = await Auth.signIn(values.username, values.password);
      //   if (result.status === 200) {
      //     const expirationDate = new Date(
      //       new Date().getTime() + 8 * 60 * 60 * 1000
      //     );
      //     localStorage.setItem("token", result.data.token, {
      //       expires: expirationDate,
      //     });
      //     localStorage.setItem(
      //       "commu-user",
      //       JSON.stringify(result.data.userProfile)
      //     );
      //     setUser(result.data.userProfile);
      //     router.push("/docs");
      //   } else {
      //     if (result.status === 401) {
      //       await showDialog({
      //         title: "ข้อผิดพลาด 401",
      //         message: "ไม่ได้รับอนุญาติหรือชื่อผู้ใช้ไม่มีในระบบ",
      //         icon: "info",
      //         btnRoutePush: {
      //           enable: true,
      //           label: "ปิด",
      //           url: "",
      //         },
      //       });
      //     } else {
      //       await showDialog({
      //         title: "ข้อผิดพลาด 404",
      //         message: "ไม่ได้รับอนุญาติหรือชื่อผู้ใช้ไม่มีในระบบ",
      //         icon: "info",
      //         btnRoutePush: {
      //           enable: true,
      //           label: "ปิด",
      //           url: "",
      //         },
      //       });
      //     }
      //   }
    } catch (error) {
      await showDialog({
        title: `ข้อผิดพลาด`,
        message: ``,
        icon: "info",
        btnRoutePush: {
          enable: true,
          label: "ปิด",
          url: "",
        },
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
                    {/* <span
                      className="logo-fbn"
                      //   onClick={() => router.push("/docs")}
                      style={{ cursor: "pointer" }}
                    ></span> */}
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
                          type="password"
                          placeholder="Your password"
                          name="password"
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
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
                          //   disabled={isSubmitting}
                        >
                          Sign In
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
