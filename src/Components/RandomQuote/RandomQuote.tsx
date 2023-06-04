import React from "react";
import "./RandomQuote.css";
import { quotes } from "src/Assets/quotes";

export const RandomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="random-quote">
      <div className="quote">{quote.quote}</div>
      <div className="author">- {quote.author}</div>
    </section>
  );
};
