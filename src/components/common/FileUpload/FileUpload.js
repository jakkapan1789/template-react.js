// import React from "react";
// import {
//   Button,
//   Card,
//   Typography,
//   Dialog,
//   DialogContent,
//   Grid,
//   Stack,
//   Zoom,
// } from "@mui/material";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
// import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
// import { styled } from "@mui/material/styles";
// import useDialog from "../AlertDialog/AlertDialog";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// const FileUpload = ({
//   label = "Browse",
//   message = "Attachments have a size limit of 10 MB.",
//   value,
//   name,
//   onChange,
//   onDelete,
//   maximumSize = 10, // default maximum size is 10MB
// }) => {
//   const [fileURL, setFileURL] = React.useState(null);
//   const [open, setOpen] = React.useState(false);
//   const [error, setError] = React.useState("");

//   const [showDialog, DialogComponent] = useDialog();

//   const handleDownload = async () => {
//     const result = await showDialog({
//       title: "Download Confirmation",
//       message: "Do you want to download file.",
//       icon: "",
//       btnConfirmText: "Download",
//       btnCancelText: "Cancel",
//     });
//     if (result) {
//       // logic download current file or from path url
//     }
//   };

//   React.useEffect(() => {
//     if (value instanceof File) {
//       const url = URL.createObjectURL(value);
//       setFileURL(url);
//       return () => URL.revokeObjectURL(url);
//     } else if (typeof value === "string") {
//       setFileURL(value);
//     }
//   }, [value]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const fileSizeInMB = file.size / 1024 / 1024; // Convert size from bytes to MB
//       if (fileSizeInMB > maximumSize) {
//         setError(`File size exceeds the maximum limit of ${maximumSize} MB`);
//       } else {
//         setError("");
//         onChange(file);
//       }
//     }
//   };

//   const handleDelete = () => {
//     onDelete();
//     setFileURL(null);
//     setError("");
//   };

//   const handleClickThumbnail = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const isImage =
//     value instanceof File
//       ? value.type.startsWith("image/")
//       : value?.endsWith(".jpg") || value?.endsWith(".png");

//   const isVideo =
//     value instanceof File
//       ? value.type.startsWith("video/")
//       : value?.endsWith(".mp4");

//   const isPDF =
//     value instanceof File
//       ? value.type === "application/pdf"
//       : value?.endsWith(".pdf");

//   const isDocument = (type) => {
//     const docTypes = [
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "application/vnd.ms-excel",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "application/vnd.ms-powerpoint",
//       "application/vnd.openxmlformats-officedocument.presentationml.presentation",
//     ];
//     return docTypes.includes(type);
//   };

//   const renderFileIcon = () => {
//     if (isPDF)
//       return (
//         <PictureAsPdfOutlinedIcon
//           onClick={() => handleDownload()}
//           sx={{ color: "gray", mr: 1, cursor: "pointer" }}
//         />
//       );
//     if (isDocument(value.type))
//       return (
//         <DescriptionOutlinedIcon
//           onClick={() => handleDownload()}
//           sx={{ color: "gray", mr: 1, cursor: "pointer" }}
//         />
//       );
//     return (
//       <InsertDriveFileOutlinedIcon
//         onClick={() => handleDownload()}
//         sx={{ color: "gray", mr: 1, cursor: "pointer" }}
//       />
//     );
//   };

//   return (
//     <>
//       {DialogComponent}
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={12} md={12} xl={12}>
//           <Stack direction="column">
//             <Card
//               sx={{
//                 p: 1,
//                 bgcolor: value ? "white" : "#ECEFF1",
//                 display: "flex",
//                 alignItems: "center",
//                 border: value ? "1px dashed #B0BEC5" : "",
//               }}
//             >
//               {value ? (
//                 <>
//                   {fileURL ? (
//                     isImage || isVideo ? (
//                       <img
//                         src={fileURL}
//                         alt="Selected"
//                         style={{
//                           width: "36px",
//                           height: "36px",
//                           objectFit: "cover",
//                           marginRight: "10px",
//                           cursor: "pointer",
//                         }}
//                         onClick={handleClickThumbnail}
//                       />
//                     ) : (
//                       renderFileIcon()
//                     )
//                   ) : (
//                     renderFileIcon()
//                   )}
//                   <Typography variant="body1" sx={{ flexGrow: 1, pl: 1 }}>
//                     {name}
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       border: "1px solid #455A64",
//                       color: "#455A64",
//                       textTransform: "none",
//                       ":hover": {
//                         border: "1px solid #455A64",
//                         color: "#455A64",
//                       },
//                     }}
//                     onClick={handleDelete}
//                   >
//                     Delete
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     component="label"
//                     sx={{
//                       color: "white",
//                       bgcolor: "#455A64",
//                       paddingLeft: 2,
//                       textTransform: "none",
//                       paddingRight: 2,
//                       ":hover": {
//                         color: "white",
//                         bgcolor: "#455A64",
//                       },
//                     }}
//                   >
//                     {label}
//                     <VisuallyHiddenInput
//                       type="file"
//                       onChange={handleFileChange}
//                     />
//                   </Button>
//                   <Typography variant="caption" sx={{ pl: 2 }}>
//                     {message}
//                   </Typography>
//                 </>
//               )}
//             </Card>
//             {error && (
//               <Typography
//                 variant="caption"
//                 color="error"
//                 sx={{ pt: 0.5, pl: 1 }}
//               >
//                 {error}
//               </Typography>
//             )}
//           </Stack>
//         </Grid>
//       </Grid>

//       <Dialog
//         open={open}
//         onClose={handleCloseDialog}
//         maxWidth="sm"
//         fullWidth
//         TransitionComponent={Zoom}
//         transitionDuration={500}
//       >
//         <DialogContent sx={{ padding: 0 }}>
//           {fileURL && isVideo ? (
//             <video
//               src={fileURL}
//               controls
//               style={{ width: "100%", height: "auto" }}
//               alt="Large Video View"
//             />
//           ) : fileURL && isImage ? (
//             <img
//               src={fileURL}
//               alt="Large View"
//               style={{ width: "100%", height: "auto" }}
//             />
//           ) : (
//             <Typography variant="h6" sx={{ padding: 2 }}>
//               No preview available for this file type.
//             </Typography>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default FileUpload;

import React from "react";
import {
  Button,
  Card,
  Typography,
  Dialog,
  DialogContent,
  Grid,
  Stack,
  Zoom,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { styled } from "@mui/material/styles";
import useDialog from "../AlertDialog/AlertDialog";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = ({
  label = "Browse",
  message = "Attachments have a size limit of 10 MB.",
  value,
  name,
  onChange,
  onDelete,
  maximumSize = 10, // default maximum size is 10MB
}) => {
  const [fileURL, setFileURL] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");

  const [showDialog, DialogComponent] = useDialog();

  React.useEffect(() => {
    if (value instanceof File) {
      const url = URL.createObjectURL(value);
      setFileURL(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof value === "string") {
      setFileURL(value);
    }
  }, [value]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / 1024 / 1024; // Convert size from bytes to MB
      if (fileSizeInMB > maximumSize) {
        setError(`File size exceeds the maximum limit of ${maximumSize} MB`);
      } else {
        setError("");
        onChange(file);
      }
    }
  };

  const handleDelete = () => {
    onDelete();
    setFileURL(null);
    setError("");
  };

  const handleClickThumbnail = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDownload = async () => {
    const result = await showDialog({
      title: "Download Confirmation",
      message: "Do you want to download this file?",
      icon: "",
      btnConfirmText: "Download",
      btnCancelText: "Cancel",
    });

    if (result && fileURL) {
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = name || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const isImage =
    value instanceof File
      ? value.type.startsWith("image/")
      : value?.endsWith(".jpg") || value?.endsWith(".png");

  const isVideo =
    value instanceof File
      ? value.type.startsWith("video/")
      : value?.endsWith(".mp4");

  const isPDF =
    value instanceof File
      ? value.type === "application/pdf"
      : value?.endsWith(".pdf");

  const isDocument = (type) => {
    const docTypes = [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];
    return docTypes.includes(type);
  };

  const renderFileIcon = () => {
    if (isPDF)
      return (
        <PictureAsPdfOutlinedIcon
          onClick={handleDownload}
          sx={{ color: "gray", mr: 1, cursor: "pointer" }}
        />
      );
    if (isDocument(value.type))
      return (
        <DescriptionOutlinedIcon
          onClick={handleDownload}
          sx={{ color: "gray", mr: 1, cursor: "pointer" }}
        />
      );
    return (
      <InsertDriveFileOutlinedIcon
        onClick={handleDownload}
        sx={{ color: "gray", mr: 1, cursor: "pointer" }}
      />
    );
  };

  return (
    <>
      {DialogComponent}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Stack direction="column">
            <Card
              sx={{
                p: 1,
                bgcolor: value ? "white" : "#ECEFF1",
                display: "flex",
                alignItems: "center",
                border: value ? "1px dashed #B0BEC5" : "",
              }}
            >
              {value ? (
                <>
                  {fileURL ? (
                    isImage || isVideo ? (
                      <img
                        src={fileURL}
                        alt="Selected"
                        style={{
                          width: "36px",
                          height: "36px",
                          objectFit: "cover",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={handleClickThumbnail}
                      />
                    ) : (
                      renderFileIcon()
                    )
                  ) : (
                    renderFileIcon()
                  )}
                  <Typography variant="body1" sx={{ flexGrow: 1, pl: 1 }}>
                    {name}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #455A64",
                      color: "#455A64",
                      textTransform: "none",
                      ":hover": {
                        border: "1px solid #455A64",
                        color: "#455A64",
                      },
                    }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component="label"
                    sx={{
                      color: "white",
                      bgcolor: "#455A64",
                      paddingLeft: 2,
                      textTransform: "none",
                      paddingRight: 2,
                      ":hover": {
                        color: "white",
                        bgcolor: "#455A64",
                      },
                    }}
                  >
                    {label}
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                    />
                  </Button>
                  <Typography variant="caption" sx={{ pl: 2 }}>
                    {message}
                  </Typography>
                </>
              )}
            </Card>
            {error && (
              <Typography
                variant="caption"
                color="error"
                sx={{ pt: 0.5, pl: 1 }}
              >
                {error}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Zoom}
        transitionDuration={500}
      >
        <DialogContent sx={{ padding: 0 }}>
          {fileURL && isVideo ? (
            <video
              src={fileURL}
              controls
              style={{ width: "100%", height: "auto" }}
              alt="Large Video View"
            />
          ) : fileURL && isImage ? (
            <img
              src={fileURL}
              alt="Large View"
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <Typography variant="h6" sx={{ padding: 2 }}>
              No preview available for this file type.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FileUpload;
