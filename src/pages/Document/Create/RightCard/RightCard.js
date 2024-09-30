import React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import useDialog from "components/common/AlertDialog/AlertDialog";
import { Formik, Form, Field } from "formik";
import FileUpload from "components/common/FileUpload/FileUpload";
import * as Yup from "yup";

const RightCard = () => {
  const navigate = useNavigate();
  const [showDialog, DialogComponent] = useDialog();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    remark: Yup.string().required("Remark is required"),
    option: Yup.string().required("Option is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleCancel = async () => {
    const result = await showDialog({
      title: "Abandon Edits",
      message: "Your changes will not be saved.",
      icon: "",
      btnConfirmText: "Ok",
      btnCancelText: "Cancel",
    });
    if (result) {
      navigate("/document");
    }
  };

  const handleSaveDraft = async (values) => {
    const result = await showDialog({
      title: "Save Draft",
      message: "Please confirm to save the draft.",
      icon: "",
      btnConfirmText: "Ok",
      btnCancelText: "Cancel",
    });
    if (result) {
      console.log("Draft saved:", values);
      navigate("/document");
    }
  };

  const handleSubmit = async (values) => {
    const result = await showDialog({
      title: "Submit Confirmation",
      message: "Please confirm the submission of documents.",
      icon: "",
      btnConfirmText: "Ok",
      btnCancelText: "Cancel",
    });
    if (result) {
      console.log("Form submitted:", values);
      navigate("/document");
    }
  };

  const [attached, setAttached] = React.useState();
  return (
    <Grid container spacing={1}>
      {DialogComponent}
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ height: "32px" }}></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Stack spacing={2}>
          <Card>
            <Box sx={{ p: 2, bgcolor: "#CFD8DC" }}>
              <Typography
                sx={{ color: "#455A64", fontWeight: "bold" }}
                variant="body2"
              >
                Equipment Info.
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Formik
                initialValues={{
                  name: "",
                  remark: "",
                  option: "",
                  comment: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, setFieldValue }) => {
                  // Default action is to handle form submission
                  handleSubmit(values);
                  setSubmitting(false);
                }}
              >
                {({ errors, touched, handleSubmit, values }) => (
                  <Form>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={4} md={4}>
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
                      <Grid item xs={12} sm={4} md={4}>
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
                      <Grid item xs={12} sm={4} md={4}>
                        <Stack direction={"column"}>
                          <Typography
                            sx={{ color: "#455A64", fontSize: "16px" }}
                          >
                            Select Option
                          </Typography>
                          <Field
                            as={TextField}
                            select
                            name="option"
                            size="small"
                            error={touched.option && Boolean(errors.option)}
                            helperText={touched.option && errors.option}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                          </Field>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Stack direction={"column"}>
                          <Typography
                            sx={{ color: "#455A64", fontSize: "16px" }}
                          >
                            Comment
                          </Typography>

                          <Field
                            as={TextField}
                            name="comment"
                            multiline
                            rows={4}
                            placeholder="Enter your comment"
                            error={touched.comment && Boolean(errors.comment)}
                            helperText={touched.comment && errors.comment}
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}></Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Stack direction={"column"}>
                          <Typography
                            sx={{ color: "#455A64", fontSize: "16px" }}
                          >
                            Attached file
                          </Typography>

                          <FileUpload
                            message="Attachments have a size limit of 10 MB."
                            name={attached?.name}
                            value={attached}
                            onChange={(file) => setAttached(file)}
                            onDelete={() => setAttached(null)}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                    <Divider sx={{ mt: 5 }} />
                    <Box
                      sx={{
                        pt: 2,

                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Button
                          onClick={() => handleCancel()}
                          variant="outlined"
                          sx={{
                            pl: 2,
                            pr: 2,
                            color: "#5C7E52",
                            borderColor: "#5C7E52",
                            textTransform: "none",
                            ":hover": { borderColor: "#5C7E52" },
                          }}
                        >
                          Cancel
                        </Button>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Button
                          type="button"
                          onClick={() => handleSaveDraft(values)}
                          variant="outlined"
                          startIcon={<DescriptionIcon />}
                          sx={{
                            pl: 2,
                            pr: 2,
                            bgcolor: "#455A64",
                            color: "#FFFFFF",
                            border: "none",
                            textTransform: "none",
                            ":hover": {
                              bgcolor: "#455A64",
                              color: "#FFFFFF",
                              border: "none",
                            },
                          }}
                        >
                          Save Draft
                        </Button>

                        <Button
                          type="submit"
                          variant="outlined"
                          startIcon={<CheckIcon />}
                          sx={{
                            pl: 2,
                            pr: 2,
                            bgcolor: " #5C7E52",
                            color: "#FFFFFF",
                            border: "none",
                            textTransform: "none",
                            ":hover": {
                              bgcolor: "#5C7E52",
                              color: "#FFFFFF",
                              border: "none",
                            },
                          }}
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RightCard;
