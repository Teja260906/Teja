const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Store messages in file
const FILE = "messages.json";

// Create file if not exists
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

// API route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  const data = JSON.parse(fs.readFileSync(FILE));
  data.push({ name, email, message, time: new Date() });

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ success: true, message: "Message saved!" });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
