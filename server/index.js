const express = require("express");
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

const PORT = 3001;

const limiter = rateLimit({
	windowMs: 1000, // 1 second
	max: 1, // limit each IP to 1 requests per windowMs
})

app.use(limiter)

app.get("/", (req, res) => {
  res.send("Hello World");
});

// CoinMarketCap relay route
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