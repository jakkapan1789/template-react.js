// src/App.js
import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const topSpenders = [
  {
    name: "ChutimaS",
    price: "20,XXX",
  },
  {
    name: "JakkapanP",
    price: "15,XXX",
  },
  {
    name: "Tom",
    price: "12,XXX",
  },
  {
    name: "Ple",
    price: "11,XXX",
  },
  {
    name: "Mcle",
    price: "11,XXX",
  },
  {
    name: "Ple",
    price: "11,XXX",
  },
];

const BackgroundContainer = styled("div")({
  backgroundImage: `url(https://www.thecitizen.co.tz/resource/image/3800104/landscape_ratio16x9/1600/900/65221378e98487fb7671099684dc89a6/jp/marriage-pic.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  opacity: 0.9,
  borderRadius: 25,
  padding: 10,
  // backgroundColor: "pink",
});

function TopSpenders() {
  return (
    <BackgroundContainer>
      <Container maxWidth="sm">
        <StyledPaper>
          <Table>
            <TableBody>
              {topSpenders.map((spender, index) => {
                return (
                  <>
                    <TableRow>
                      <TableCell sx={{ fontSize: 20 }}>{index + 1}</TableCell>
                      <TableCell sx={{ fontSize: 20 }}>
                        {spender.name}
                      </TableCell>
                      <TableCell sx={{ fontSize: 20 }}>
                        ฿ {spender.price}
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </StyledPaper>
      </Container>
    </BackgroundContainer>
  );
}

export default TopSpenders;
