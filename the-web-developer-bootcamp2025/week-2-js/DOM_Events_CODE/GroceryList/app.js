const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newLi = document.createElement("li");
  newLi.textContent = `${qty.value} ${product.value}`;
  form.append(newLi);

  product.value = "";
  qty.value = "";
});
