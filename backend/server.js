const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/api/quote', async (req, res) => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    res.json({
      content: data.content,
      author: data.author
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
