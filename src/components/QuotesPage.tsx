import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { QuoteProps } from "../App";

interface Props {
  cards: QuoteProps[];
}

const QuotesPage = ({ cards }: Props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const onClick = (e: any) => {};
  return (
    <Box sx={{ padding: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Quotes</StyledTableCell>
              <StyledTableCell>Author</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.quote}</StyledTableCell>
                <StyledTableCell>{row.author}</StyledTableCell>
                <StyledTableCell>
                  {JSON.stringify(row.gender) === '"male"' ? (
                    <span>&#128104;</span>
                  ) : (
                    <span>&#128105;</span>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        component={Link}
        to={"/random"}
        variant="contained"
        type="submit"
        sx={{
          mt: 3,
          mb: 2,
          textDecoration: "none",
          backgroundColor: "primary",
        }}
      >
        {" "}
        {"Random"}
      </Button>{" "}
    </Box>
  );
};

export default QuotesPage;
