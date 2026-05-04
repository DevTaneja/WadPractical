const API = "/tasks";

// Load
function loadTasks() {
  fetch(API)
    .then((res) => res.json())
    .then((tasks) => {
      let list = document.getElementById("list");
      list.innerHTML = "";

      tasks.forEach((task, i) => {
        list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${task}
        <div>
          <button onclick="editTask(${i})" class="btn btn-warning btn-sm">Edit</button>
          <button onclick="deleteTask(${i})" class="btn btn-danger btn-sm">Delete</button>
        </div>
      </li>
    `;
      });
    });
}

// Add
function addTask() {
  let input = document.getElementById("taskInput");

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: input.value }),
  }).then(() => {
    input.value = "";
    loadTasks();
  });
}

// Delete
function deleteTask(id) {
  fetch(API + "/" + id, { method: "DELETE" }).then(loadTasks);
}

// Update
function editTask(id) {
  let newTask = prompt("Edit task:");

  fetch(API + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: newTask }),
  }).then(loadTasks);
}

// Initial load
loadTasks();
