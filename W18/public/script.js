// Load songs
function loadSongs() {
  fetch("http://localhost:3000/songs")
    .then((res) => res.json())
    .then((data) => {
      let table = document.getElementById("data");
      table.innerHTML = "";
      data.forEach((song) => {
        table.innerHTML += `
      <tr>
        <td>${song.Songname}</td>
        <td>${song.Film}</td>
        <td>${song.Music_director}</td>
        <td>${song.singer}</td>
        <td>${song.Actor || "-"}</td>
        <td>${song.Actress || "-"}</td>
        <td>
          <button onclick="deleteSong('${song.Songname}')" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `;
      });
    });
}

// Add song
function addSong() {
  let song = document.getElementById("song").value;
  let film = document.getElementById("film").value;
  let md = document.getElementById("md").value;
  let singer = document.getElementById("singer").value;

  if (!song || !film || !md || !singer) {
    alert("Fill all fields");
    return;
  }

  fetch("http://localhost:3000/addsong", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Songname: song,
      Film: film,
      Music_director: md,
      singer: singer,
    }),
  }).then(() => {
    loadSongs();
  });
}

// Delete song
function deleteSong(name) {
  fetch("http://localhost:3000/delete/" + name).then(() => loadSongs());
}

// Initial load
loadSongs();
