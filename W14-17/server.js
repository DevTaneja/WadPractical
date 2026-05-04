const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));

// API
app.get("/users", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
