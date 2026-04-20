const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🔹 Projects API
app.get("/projects", (req, res) => {
  res.json([
    {
      title: "AWS Portfolio",
      desc: "CI/CD deployment using GitHub Actions + EC2",
      link: "http://13.233.197.196"
    },
    {
      title: "AI Depression Detection",
      desc: "Game theory ML project",
      link: "#"
    }
  ]);
});

// 🔹 Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 New Contact:", name, email, message);

  res.json({ status: "Message received ✅" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
