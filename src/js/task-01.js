const categoriesList = document.querySelector("#categories");
console.log(`Number of categories:`, categoriesList.children.length);

const itemsList = document
  .querySelectorAll(".item")
  .forEach((elem) =>
    console.log(
      `Categories:`,
      elem.firstElementChild.textContent,
      `\n`,
      `Elements:`,
      elem.lastElementChild.children.length
    )
  );
// const categoriesEl = document.querySelectorAll(".item");
// console.log("Number of categories: ", categoriesEl.length);

// for (const list of categoriesEl) {
//   let category = list.firstElementChild.textContent;
//   let quantityElem = list.lastElementChild.children.length;
//   console.log(`Category: ${category} \nElements: ${quantityElem}`);
// }
