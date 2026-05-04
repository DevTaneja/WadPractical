const products = [
  {
    name: "Headphones",
    price: "₹7999",
    desc: "Noise cancelling",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Smartwatch",
    price: "₹12999",
    desc: "Fitness watch",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Mouse",
    price: "₹2499",
    desc: "Gaming mouse",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Stand",
    price: "₹1999",
    desc: "Laptop stand",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Keyboard",
    price: "₹3000",
    desc: "Mechanical",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Monitor",
    price: "₹15000",
    desc: "HD monitor",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Speaker",
    price: "₹4000",
    desc: "Bluetooth",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Tablet",
    price: "₹20000",
    desc: "Android tablet",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Camera",
    price: "₹30000",
    desc: "Digital camera",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Powerbank",
    price: "₹1500",
    desc: "Fast charge",
    img: "https://via.placeholder.com/60",
  },
  {
    name: "Router",
    price: "₹2000",
    desc: "WiFi router",
    img: "https://via.placeholder.com/60",
  },
];

let currentPage = 1;
const itemsPerPage = 10;

function showProducts() {
  let body = document.getElementById("tableBody");
  body.innerHTML = "";

  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let pageData = products.slice(start, end);

  pageData.forEach((p) => {
    body.innerHTML += `
            <tr>
             <td><img src="${p.img}"></td>
                <td>${p.name}</td>
               
                <td>${p.price}</td>
                <td>${p.desc}</td>
            </tr>
        `;
  });

  document.getElementById("pageInfo").innerText =
    "Page " + currentPage + " of " + Math.ceil(products.length / itemsPerPage);
}

function nextPage() {
  if (currentPage < Math.ceil(products.length / itemsPerPage)) {
    currentPage++;
    showProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showProducts();
  }
}

showProducts();
