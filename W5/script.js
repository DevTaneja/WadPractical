function filterProducts() {
  let checked = document.querySelectorAll("input[type=checkbox]:checked");
  let values = Array.from(checked).map((c) => c.value);

  let products = document.querySelectorAll(".product");

  products.forEach((p) => {
    let category = p.getAttribute("data-category");

    if (values.length === 0 || values.includes(category)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
