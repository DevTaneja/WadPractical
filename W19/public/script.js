// Load all
function loadAll() {
  fetch("/students")
    .then((res) => res.json())
    .then(showData);
}

// DSBDA > 20
function loadDSBDA() {
  fetch("/dsbda")
    .then((res) => res.json())
    .then(showData);
}

// Top students
function loadTop() {
  fetch("/top")
    .then((res) => res.json())
    .then(showData);
}

// Display function
function showData(data) {
  let table = document.getElementById("data");
  table.innerHTML = "";

  data.forEach((s) => {
    table.innerHTML += `       <tr>         <td>${s.Name}</td>         <td>${s.Roll_No}</td>         <td>${s.WAD}</td>         <td>${s.DSBDA}</td>         <td>${s.CNS}</td>         <td>${s.CC}</td>         <td>${s.AI}</td>         <td>           <button onclick="deleteStudent('${s.Name}')" class="btn btn-danger btn-sm">Delete</button>         </td>       </tr>
    `;
  });
}

// Delete
function deleteStudent(name) {
  fetch("/delete/" + name).then(() => loadAll());
}

// Initial load
loadAll();
