const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/coin", async (req, res) => {
  try {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${req.query.q}`, {
      method: 'GET', 
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY
      }
    });

    const body = await response.json();

    return res.json({
      success: true,
      body
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));