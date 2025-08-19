const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");

const MAILRY_TOKEN = process.env.MAILRY_TOKEN;

app.get("/", (req, res) => res.send("Express on Vercel"));


// Route sederhana untuk hit Mailry API
app.get("/email", async (req, res) => {
  console.log(MAILRY_TOKEN);
  try {
    const response = await axios.get("https://api.mailry.co/ext/email", {
      headers: {
        Authorization: MAILRY_TOKEN,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data); // kirim balik ke client
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch email API" });
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
