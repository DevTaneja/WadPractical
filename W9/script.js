function getWeather() {
  let city = document.getElementById("city").value.toLowerCase();
  let result = document.getElementById("result");

  result.innerHTML = "Loading...";

  fetch("data.json") // AJAX call
    .then((res) => res.json())
    .then((data) => {
      if (data[city]) {
        let w = data[city];

        result.innerHTML = `
      <div class="card p-3">
        <h5>${city.toUpperCase()}</h5>
        <p>Temperature: ${w.temp}</p>
        <p>Humidity: ${w.humidity}</p>
        <p>Condition: ${w.condition}</p>
      </div>
    `;
      } else {
        result.innerHTML = "<p class='text-danger'>City not found</p>";
      }
    });
}
