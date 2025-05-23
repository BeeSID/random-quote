import React, { useEffect, useState } from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import QuoteCard from './components/QuoteCard';
import './App.css'; // Import the CSS here

function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container maxWidth="md" className="app-container">
      <CssBaseline />
      <Typography variant="h3" className="app-title">
        Random Quote Generator
      </Typography>

      {quote && <QuoteCard quote={quote} />}

      <div className="button-wrapper">
        <button className="quote-button" onClick={fetchQuote}>
          Get Another Quote
        </button>
      </div>
    </Container>
  );
}

export default App;
