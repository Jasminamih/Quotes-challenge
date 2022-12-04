import { Box, Button, cardClasses, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QuoteProps } from "../App";

interface PropsRandom {
  cards: QuoteProps[];
}
const Random = ({ cards }: PropsRandom) => {
  const [random, setRandom] = useState<QuoteProps>(() => {
    if (localStorage.getItem("random")) {
      return JSON.parse(localStorage.getItem("random")!);
    }
    return [];
  });;

  let randomQuote = cards[Math.floor(Math.random() * cards.length)];

  useEffect(() => {
    if (!localStorage.getItem("random")){
    setRandom(randomQuote);
    localStorage.setItem("random", JSON.stringify(randomQuote)!);}
  }, []);



  const onClick = (event: any) => {
    setRandom(randomQuote);
  };

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {" "}
        <h1>{random?.quote}</h1>
        <h4>{random?.author}</h4>
      </Box>
      <Box
        sx={{
          height: "20%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          component={Link}
          to={"/"}
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            mb: 2,
            textDecoration: "none",
            backgroundColor: "primary",
          }}
        >
          Back
        </Button>
        <Button
          onClick={onClick}
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            mb: 2,
            textDecoration: "none",
            backgroundColor: "primary",
          }}
        >
          New Quote
        </Button>
      </Box>
    </Container>
  );
};

export default Random;
