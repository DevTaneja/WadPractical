const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/music");

// Schema
const SongSchema = new mongoose.Schema({
  Songname: String,
  Film: String,
  Music_director: String,
  singer: String,
  Actor: String,
  Actress: String,
});

const Song = mongoose.model("Song", SongSchema);

// Insert sample data
app.get("/insert", async (req, res) => {
  await Song.insertMany([
    { Songname: "Song1", Film: "Film1", Music_director: "MD1", singer: "S1" },
    { Songname: "Song2", Film: "Film2", Music_director: "MD1", singer: "S2" },
    { Songname: "Song3", Film: "Film3", Music_director: "MD2", singer: "S1" },
  ]);
  res.send("Inserted");
});

// Get all songs
app.get("/songs", async (req, res) => {
  let data = await Song.find();
  res.json(data);
});

// Add song
app.post("/addsong", async (req, res) => {
  let song = new Song(req.body);
  await song.save();
  res.json({ msg: "added" });
});

// Delete song
app.get("/delete/:name", async (req, res) => {
  await Song.deleteOne({ Songname: req.params.name });
  res.send("Deleted");
});

// Count
app.get("/count", async (req, res) => {
  let count = await Song.countDocuments();
  res.send("Total: " + count);
});
console.log(mongoose);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
