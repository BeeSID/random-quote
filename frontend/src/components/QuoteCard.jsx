import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <div className="quote-content">“{quote.content}”</div>
      <div className="quote-author">— {quote.author}</div>
    </div>
  );
};

export default QuoteCard;
