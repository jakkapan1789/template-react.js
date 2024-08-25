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

export default function TableDocument({ rows }) {
  const navigate = useNavigate();
  // const { searchOption, searchValue, startTime, endTime } = useDocument();
  const defaultRowHeight = 61;
  const rowsPerPage = 8;
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
                <StyledTableCell>Campaign Code</StyledTableCell>
                <StyledTableCell align="left">
                  Communication Code
                </StyledTableCell>
                <StyledTableCell align="left">
                  Communication Name
                </StyledTableCell>
                <StyledTableCell align="left">สร้างโดย</StyledTableCell>
                <StyledTableCell align="left">วันที่สร้าง</StyledTableCell>
                <StyledTableCell align="center">ช่องทางสื่อสาร</StyledTableCell>
                <StyledTableCell align="center">สถานะ</StyledTableCell>
                <StyledTableCell align="center">
                  วันที่อัพเดทล่าสุด (Admin)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} sx={{ border: "none" }}>
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
                            ไม่พบผลลัพธ์ที่คุณค้นหา
                          </Typography>
                          <Typography sx={{ color: "#455A64" }}>
                            กรุณาลองใช้คำค้นอื่น แล้วลองค้นหาใหม่อีกครั้ง
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
                      {row.campaign_code}
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
                      {row.communication_code}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.marketing_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.created_by}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.created_at_display}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.chanel_amount === 0 ? (
                        <Chip label={row.chanel_amount} />
                      ) : (
                        <ChanelTooltip data={row} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ChipStatus status={row.status} />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.updated_at_display}
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
              <Typography>ทั้งหมด {rows.length} รายการ</Typography>
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
              <Typography sx={{ marginRight: 1 }}>หน้า</Typography>
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
