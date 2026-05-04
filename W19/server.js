const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/student");

// Schema
const StudentSchema = new mongoose.Schema({
  Name: String,
  Roll_No: Number,
  WAD: Number,
  DSBDA: Number,
  CNS: Number,
  CC: Number,
  AI: Number,
});

const Student = mongoose.model("Student", StudentSchema);

// Insert sample data
app.get("/insert", async (req, res) => {
  await Student.insertMany([
    { Name: "A", Roll_No: 1, WAD: 25, DSBDA: 30, CNS: 28, CC: 27, AI: 29 },
    { Name: "B", Roll_No: 2, WAD: 15, DSBDA: 18, CNS: 20, CC: 22, AI: 19 },
    { Name: "C", Roll_No: 3, WAD: 30, DSBDA: 35, CNS: 32, CC: 31, AI: 34 },
  ]);
  res.send("Inserted");
});

// Get all students
app.get("/students", async (req, res) => {
  let data = await Student.find();
  res.json(data);
});

// Students with DSBDA > 20
app.get("/dsbda", async (req, res) => {
  let data = await Student.find({ DSBDA: { $gt: 20 } });
  res.json(data);
});

// Students with all marks > 25
app.get("/top", async (req, res) => {
  let data = await Student.find({
    WAD: { $gt: 25 },
    DSBDA: { $gt: 25 },
    CNS: { $gt: 25 },
    CC: { $gt: 25 },
    AI: { $gt: 25 },
  });
  res.json(data);
});

// Delete student
app.get("/delete/:name", async (req, res) => {
  await Student.deleteOne({ Name: req.params.name });
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
