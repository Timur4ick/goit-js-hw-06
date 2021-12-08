const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = ingredients.map((item) => {
  const productItem = document.createElement("li");

  productItem.textContent = item;
  console.log(productItem);

  return productItem;
});

const productItem = document.createElement("li");
const ulEl = document.querySelector("#ingredients").append(...ingredientEl);
