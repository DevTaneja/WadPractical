document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let eventType = document.getElementById("eventType").value;

  let valid = true;

  // Clear errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("ageError").innerText = "";
  document.getElementById("eventError").innerText = "";

  // Name validation
  if (name === "" || name.length < 2 || /\d/.test(name)) {
    document.getElementById("nameError").innerText = "Enter valid name";
    valid = false;
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Invalid email";
    valid = false;
  }

  // Age validation
  if (age === "" || age < 18) {
    document.getElementById("ageError").innerText = "Age must be 18+";
    valid = false;
  }

  // Event validation
  if (eventType === "") {
    document.getElementById("eventError").innerText = "Select event";
    valid = false;
  }

  if (!valid) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ name, email, age, eventType });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully");

  window.location.href = "users.html";
});
