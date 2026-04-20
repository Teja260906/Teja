const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/contact", (req, res) => {
  const data = req.body;

  fs.appendFileSync("messages.txt", JSON.stringify(data) + "\n");

  res.json({ message: "Message received!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
