import React from "react";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Box,
  Button,
  Select,
  InputAdornment,
  TextField,
  MenuItem,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDocument } from "context/hook";
import InsertDialog from "components/equipment/InsertDialog/InsertDialog";

import AppTabs from "./AppTabs/AppTabs";
const Document = () => {
  const { searchOption, setSearchOption, searchValue, setSearchValue } =
    useDocument();

  const [placeholder, setPlaceholder] = React.useState("ID eg. CP000001");
  React.useEffect(() => {
    if (searchOption === "id") {
      setPlaceholder("ID eg. CP000001");
    } else {
      setPlaceholder("Doc No. eg. CM000001");
    }
  }, [searchOption]);

  const handleSelectChange = (event) => {
    setSearchOption(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} sm={12} sx={{ display: "flex" }}>
        <Typography sx={{ color: "#455A64", fontWeight: "bold" }}>
          Search options
        </Typography>
      </Grid>
      <InsertDialog open={open} onClose={() => setOpen(false)} />
      <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            bgcolor: "white",
            overflow: "visible",
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  width: { sm: "100%", md: "100%" },
                  textAlign: { sm: "left", md: "left" },
                }}
              >
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={5}
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <TextField
                        size="small"
                        variant="outlined"
                        placeholder={placeholder}
                        value={searchValue}
                        onChange={(ev) => setSearchValue(ev.target.value)}
                        name="searchLeft"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Select
                                value={searchOption}
                                onChange={handleSelectChange}
                                displayEmpty
                                variant="outlined"
                                sx={{
                                  marginLeft: -1,
                                  height: "38px",
                                  width: "180px",
                                  border: "none",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                    borderRight: "1px solid #EEEEEE",
                                    borderRadius: 0,
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                    borderRight: "1px solid #EEEEEE",
                                    borderRadius: 0,
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      border: "none",
                                      borderRight: "1px solid #EEEEEE",
                                      borderRadius: 0,
                                    },
                                }}
                              >
                                <MenuItem key="id" value="id">
                                  ID
                                </MenuItem>
                                <MenuItem key="docNo" value="docNo">
                                  Doc No.
                                </MenuItem>
                              </Select>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Button
                      onClick={() => setOpen(true)}
                      variant="contained"
                      startIcon={<AddOutlinedIcon />}
                      sx={{
                        borderRadius: 2,
                        pl: 3,
                        pr: 3,
                        bgcolor: "#455A64",
                        textTransform: "none",
                        color: "white",
                        ":hover": {
                          bgcolor: "#455A64",
                          color: "white",
                        },
                      }}
                    >
                      Insert Equipment
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
        <AppTabs />
      </Grid>
    </Grid>
  );
};

export default Document;
