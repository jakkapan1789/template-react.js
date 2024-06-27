/* eslint-disable */
import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Pagination,
  Select,
  Card,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import SearchOffIcon from "@mui/icons-material/SearchOff";
import ChipStatus from "./ChipStatus/ChipStatus";
import StyledTableCell from "./StyledTableCell/StyledTableCell";
import StyledTableRow from "./StyledTableRow/StyledTableRow";
import { useDocument } from "context/hook";
import ChanelTooltip from "./ChanelTooltip/ChanelTooltip";
export default function TableDocument({ rows }) {
  const { searchOption, searchValue } = useDocument();

  const defaultRowHeight = 60;
  const rowsPerPage = 9;
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(
    Math.ceil(rows.length / rowsPerPage)
  );
  const [paginatedRows, setPaginatedRows] = React.useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSelectChange = (event) => {
    setPage(event.target.value);
  };

  React.useEffect(() => {
    let filteredRows = rows;

    if (searchValue !== "") {
      if (searchOption === "id") {
        filteredRows = rows.filter((f) =>
          f.campaignId.toLowerCase().startsWith(searchValue.toLowerCase())
        );
      } else {
        filteredRows = rows.filter((f) =>
          f.communicationId.toLowerCase().startsWith(searchValue.toLowerCase())
        );
      }
    }

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, filteredRows.length);
    const newPaginatedRows = filteredRows.slice(startIndex, endIndex);

    setPaginatedRows(newPaginatedRows);
  }, [searchValue, searchOption, page]);

  return (
    <>
      <Box component={Card} sx={{ borderRadius: "8px", bgcolor: "#F3F5F7" }}>
        <TableContainer
          style={{
            minHeight: defaultRowHeight * 9.5,
            maxHeight: defaultRowHeight * 9.5,
            overflow: "auto",
            borderRadius: "8px",
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Doc No.</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Created by</StyledTableCell>
                <StyledTableCell align="left">Created date</StyledTableCell>
                <StyledTableCell align="center">Chanels</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} sx={{ border: "none" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Stack
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 60,
                            marginTop: 5,
                          }}
                        >
                          <SearchOffIcon
                            sx={{ color: "#455A64", fontSize: 40 }}
                          />
                          <Typography
                            sx={{ color: "#455A64", fontWeight: "bold" }}
                          >
                            No results found for your search.
                          </Typography>
                          <Typography sx={{ color: "#455A64" }}>
                            Please try using a different search term. Then try
                            searching again.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ) : (
                paginatedRows.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    sx={{
                      minHeight: 60,
                      height: "100%",
                      maxHeight: 60,
                      cursor: "pointer",
                      transition: "transform 0.3s ease;",
                      ":hover": { bgcolor: "#EEEEEE" },
                    }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.campaignId}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{
                        color: "#455A64",
                        fontWeight: "bold",

                        textDecoration: "underline",
                      }}
                      //   onClick={() => route.push(`docs\\create`)}
                    >
                      {row.communicationId}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.programName}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.createBy}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.createData}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {row.chanels} */}
                      <ChanelTooltip value={row.chanels} />
                      {/* <Chip label={row.chanels} /> */}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ChipStatus status={row.status} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "white",
            paddingTop: 2,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={4}
              md={4}
              lg={4}
              sx={{ textAlign: "left", paddingLeft: 2, paddingBottom: 1 }}
            >
              <Typography>Total {rows.length} items</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                paddingBottom: 1,
              }}
            >
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
              />
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: 2,
                paddingBottom: 1,
              }}
            >
              <Typography sx={{ marginRight: 1 }}>Page</Typography>
              <Select
                size="small"
                value={page}
                onChange={handleSelectChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      mt: -8,
                    },
                  },
                }}
              >
                {Array.from({ length: pageCount }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
