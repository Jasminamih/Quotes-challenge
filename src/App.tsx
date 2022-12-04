import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuotesPage from "./components/QuotesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Random from "./components/Random";

export interface QuoteProps {
  id: "number";
  author: "string";
  quote: "string";
  gender: "string";
}

function App() {
  const [quotesData, setQuotesData] = useState<QuoteProps[] | []>([]);

  const getData = async () => {
    const quotesData: QuoteProps[] = await fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => data.quotes);

    const finalData = await Promise.all(
      quotesData.map(async (quote) => {
        const genderData = await fetch(
          `https://api.genderize.io/?name=${quote.author.split(" ")[0]}`
        ).then((res) => res.json());
        return {
          ...quote,
          gender: genderData.gender,
        };
      })
    );
    return setQuotesData(finalData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuotesPage cards={quotesData} />} />
        <Route path="/random" element={<Random cards={quotesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
