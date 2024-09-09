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
import ChanelTooltip from "./ChanelTooltip/ChanelTooltip";
import { useNavigate } from "react-router";

const headers = [
  {
    name: "Brand",
  },
  {
    name: "Model",
    align: "left",
  },
  {
    name: "Equipment Name",
    align: "left",
  },
  {
    name: "Number",
    align: "left",
  },
  {
    name: "Type Number",
    align: "center",
  },
  // {
  //   name: "Column 6",
  //   align: "center",
  // },
  // {
  //   name: "Column 7",
  //   align: "center",
  // },
  // {
  //   name: "Column 8",
  //   align: "center",
  // },
  // {
  //   name: "Column 9",
  //   align: "center",
  // },
];
export default function TableDocument({ rows }) {
  const navigate = useNavigate();
  const defaultRowHeight = 61;
  const rowsPerPage = 10;
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
  console.log("rows", rows[0]);

  React.useEffect(() => {
    let filteredRows = rows;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, filteredRows.length);
    const newPaginatedRows = filteredRows.slice(startIndex, endIndex);

    setPaginatedRows(newPaginatedRows);
  }, [page, rows]);

  React.useEffect(() => {
    setPageCount(Math.ceil(rows.length / rowsPerPage));
  }, [rows]);

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
                {headers &&
                  headers.map((header, index) => (
                    <StyledTableCell key={index} align={header.align}>
                      {header.name}
                    </StyledTableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={headers.length} sx={{ border: "none" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Stack
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 60,
                            marginTop: 10,
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
                      {row.equipmenT_BRAND_NO}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{
                        color: "rgb(21,119,245)",
                        fontWeight: "bold",

                        textDecoration: "underline",
                      }}
                      onClick={() =>
                        navigate(`docs/update?guid=${row.communication_guid}`)
                      }
                    >
                      {row.equipmenT_MODEL}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.equipmenT_NAME}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.equipmenT_NO}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.equipmenT_TYPE_NO}
                    </StyledTableCell>
                    {/* <StyledTableCell align="center">
                      {row.chanel_amount === 0 ? (
                        <Chip label={row.chanel_amount} />
                      ) : (
                        <ChanelTooltip data={row} />
                      )}
                    </StyledTableCell> */}
                    {/* <StyledTableCell align="center">
                      <ChipStatus status={row.status} />
                    </StyledTableCell> */}
                    {/* <StyledTableCell align="center">
                      {row.equipmenT_UPDATE_BY}
                    </StyledTableCell> */}
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
              <Typography>All {rows.length} items</Typography>
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
