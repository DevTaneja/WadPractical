const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let tasks = [];

// GET
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD
app.post("/tasks", (req, res) => {
  tasks.push(req.body.task);
  res.json({ msg: "added" });
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  tasks[req.params.id] = req.body.task;
  res.json({ msg: "updated" });
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({ msg: "deleted" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
