let productCount = 0;

if (localStorage.getItem("productCount")) {
  productCount = localStorage.getItem("productCount");
} else {
  productCount = 0;
  localStorage.setItem("productCount", 0);
}

document.getElementById("winkelmandItems").innerHTML = productCount;

function winkelWagenAdd() {
  productCount = Number(productCount) + 1;
  localStorage.setItem("productCount", productCount);
  document.getElementById("winkelmandItems").innerHTML = productCount;
}
