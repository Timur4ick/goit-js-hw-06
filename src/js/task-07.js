const inputName = document.querySelector("#font-size-control");
console.log(inputName);

const spanEl = document.querySelector("#text");
console.log(spanEl);

inputName.addEventListener("input", () => {
  const size = inputName.value;
  spanEl.style.fontSize = size + "px";
});
