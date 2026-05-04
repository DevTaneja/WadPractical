// Fake AJAX POST
function ajaxPost(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300);
  });
}

// Register
document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let dob = document.getElementById("dob").value;

  let valid = true;

  // Clear errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("dobError").innerText = "";

  // Validations
  if (name.length < 2) {
    document.getElementById("nameError").innerText = "Invalid name";
    valid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Invalid email";
    valid = false;
  }

  if (mobile.length !== 10) {
    document.getElementById("mobileError").innerText = "Enter 10 digit number";
    valid = false;
  }

  if (dob === "") {
    document.getElementById("dobError").innerText = "Select DOB";
    valid = false;
  }

  if (!valid) return;

  let user = { name, email, mobile, dob };

  ajaxPost(user).then((data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    ```
    alert("Registered!");
    window.location.href = "users.html";
    ```;
  });
});

// Login
function login() {
  let email = document.getElementById("loginEmail").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find((u) => u.email === email);

  if (found) {
    alert("Login success");
  } else {
    alert("User not found");
  }
}
