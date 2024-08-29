// import React from "react";
// import { Button, Card, Typography, Dialog, DialogContent } from "@mui/material";
// import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// import { styled } from "@mui/material/styles";

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

// const FileUpload = ({ label, message, value, name, onChange, onDelete }) => {
//   const [fileURL, setFileURL] = React.useState(null);
//   const [open, setOpen] = React.useState(false);

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
//     onChange(file);
//   };

//   const handleDelete = () => {
//     onDelete();
//     setFileURL(null);
//   };

//   const handleClickThumbnail = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const isVideo = value instanceof File && value.type.startsWith("video/");

//   return (
//     <>
//       <Card
//         sx={{
//           p: 1,
//           mt: 2,
//           bgcolor: value ? "white" : "#ECEFF1",
//           display: "flex",
//           alignItems: "center",
//           border: value ? "1px dashed #B0BEC5" : "",
//         }}
//       >
//         {value ? (
//           <>
//             {fileURL ? (
//               isVideo ? (
//                 <video
//                   src={fileURL}
//                   alt="Selected Video"
//                   style={{
//                     width: "36px",
//                     height: "36px",
//                     objectFit: "cover",
//                     marginRight: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={handleClickThumbnail}
//                   controls
//                 />
//               ) : (
//                 <img
//                   src={fileURL}
//                   alt="Selected"
//                   style={{
//                     width: "36px",
//                     height: "36px",
//                     objectFit: "cover",
//                     marginRight: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={handleClickThumbnail}
//                 />
//               )
//             ) : (
//               <InsertPhotoOutlinedIcon sx={{ color: "gray", mr: 1 }} />
//             )}
//             <Typography variant="body1" sx={{ flexGrow: 1, pl: 1 }}>
//               {name}
//             </Typography>
//             <Button
//               variant="outlined"
//               sx={{
//                 border: "1px solid #455A64",
//                 color: "#455A64",
//                 ":hover": {
//                   border: "1px solid #455A64",
//                   color: "#455A64",
//                 },
//               }}
//               onClick={handleDelete}
//             >
//               ลบ
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button
//               component="label"
//               sx={{
//                 color: "white",
//                 bgcolor: "#455A64",
//                 paddingLeft: 2,
//                 paddingRight: 2,
//                 ":hover": {
//                   color: "white",
//                   bgcolor: "#455A64",
//                 },
//               }}
//             >
//               เลือกไฟล์
//               <VisuallyHiddenInput type="file" onChange={handleFileChange} />
//             </Button>
//             <Typography variant="caption" sx={{ pl: 2 }}>
//               {message}
//             </Typography>
//           </>
//         )}
//       </Card>

//       <Dialog open={open} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//         <DialogContent sx={{ padding: 0 }}>
//           {fileURL && isVideo ? (
//             <video
//               src={fileURL}
//               controls
//               style={{ width: "100%", height: "auto" }}
//               alt="Large Video View"
//             />
//           ) : (
//             <img
//               src={fileURL}
//               alt="Large View"
//               style={{ width: "100%", height: "auto" }}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default FileUpload;

// import React from "react";
// import {
//   Button,
//   Card,
//   Typography,
//   Dialog,
//   DialogContent,
//   Grid,
//   Stack,
// } from "@mui/material";
// import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// import { styled } from "@mui/material/styles";

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
//   message,
//   value,
//   name,
//   onChange,
//   onDelete,
// }) => {
//   const [fileURL, setFileURL] = React.useState(null);
//   const [open, setOpen] = React.useState(false);

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
//     onChange(file);
//   };

//   const handleDelete = () => {
//     onDelete();
//     setFileURL(null);
//   };

//   const handleClickThumbnail = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const isVideo =
//     value instanceof File || value instanceof Blob
//       ? value.type.startsWith("video/")
//       : value?.startsWith("http") && value?.endsWith(".mp4");

//   return (
//     <>
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={12} md={12} xl={12}>
//           <Stack direction="column" sx={{ pt: 1 }}>
//             <Card
//               sx={{
//                 p: 1,
//                 mt: 2,
//                 bgcolor: value ? "white" : "#ECEFF1",
//                 display: "flex",
//                 alignItems: "center",
//                 border: value ? "1px dashed #B0BEC5" : "",
//               }}
//             >
//               {value ? (
//                 <>
//                   {fileURL ? (
//                     isVideo ? (
//                       <video
//                         src={fileURL}
//                         alt="Selected Video"
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
//                     )
//                   ) : (
//                     <InsertPhotoOutlinedIcon sx={{ color: "gray", mr: 1 }} />
//                   )}
//                   <Typography variant="body1" sx={{ flexGrow: 1, pl: 1 }}>
//                     {name}
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       border: "1px solid #455A64",
//                       color: "#455A64",
//                       ":hover": {
//                         border: "1px solid #455A64",
//                         color: "#455A64",
//                       },
//                     }}
//                     onClick={handleDelete}
//                   >
//                     ลบ
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
//           </Stack>
//         </Grid>
//       </Grid>

//       <Dialog open={open} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//         <DialogContent sx={{ padding: 0 }}>
//           {fileURL && isVideo ? (
//             <video
//               src={fileURL}
//               controls
//               style={{ width: "100%", height: "auto" }}
//               alt="Large Video View"
//             />
//           ) : (
//             <img
//               src={fileURL}
//               alt="Large View"
//               style={{ width: "100%", height: "auto" }}
//             />
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
  Fade,
} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { styled } from "@mui/material/styles";

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
  message,
  value,
  name,
  onChange,
  onDelete,
}) => {
  const [fileURL, setFileURL] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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
    onChange(file);
  };

  const handleDelete = () => {
    onDelete();
    setFileURL(null);
  };

  const handleClickThumbnail = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const isVideo =
    value instanceof File || value instanceof Blob
      ? value.type.startsWith("video/")
      : value?.startsWith("http") && value?.endsWith(".mp4");

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Stack direction="column" sx={{ pt: 1 }}>
            <Card
              sx={{
                p: 1,
                mt: 2,
                bgcolor: value ? "white" : "#ECEFF1",
                display: "flex",
                alignItems: "center",
                border: value ? "1px dashed #B0BEC5" : "",
              }}
            >
              {value ? (
                <>
                  {fileURL ? (
                    isVideo ? (
                      <video
                        src={fileURL}
                        alt="Selected Video"
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
                    )
                  ) : (
                    <InsertPhotoOutlinedIcon sx={{ color: "gray", mr: 1 }} />
                  )}
                  <Typography variant="body1" sx={{ flexGrow: 1, pl: 1 }}>
                    {name}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #455A64",
                      color: "#455A64",
                      ":hover": {
                        border: "1px solid #455A64",
                        color: "#455A64",
                      },
                    }}
                    onClick={handleDelete}
                  >
                    ลบ
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
          </Stack>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        transitionDuration={700}
      >
        <DialogContent sx={{ padding: 0 }}>
          {fileURL && isVideo ? (
            <video
              src={fileURL}
              controls
              style={{ width: "100%", height: "auto" }}
              alt="Large Video View"
            />
          ) : (
            <img
              src={fileURL}
              alt="Large View"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FileUpload;
