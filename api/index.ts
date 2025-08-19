const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");

const MAILRY_TOKEN = process.env.MAILRY_TOKEN;

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

// Route sederhana untuk hit Mailry API
app.get("/email", async (req, res) => {
  try {
    const response = await axios.get("https://api.mailry.co/ext/email", {
      headers: {
        Authorization: MAILRY_TOKEN,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Connection: "keep-alive"
      },
    });

    res.json(response.data); // kirim balik ke client
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch email API" });
  }
});

app.post("/email", async (req, res) => {
  console.log(req);
  const { emailId, to, subject, htmlBody, plainBody, attachments } = req.body;
  try {
    const response = await axios.post("https://api.mailry.co/ext/inbox/send", {
      emailId,
      to,
      subject,
      htmlBody,
      plainBody,
      attachments,
    }, {
      headers: {
        Authorization: MAILRY_TOKEN,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Connection: "keep-alive"
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
