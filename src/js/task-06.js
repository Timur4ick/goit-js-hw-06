const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const lengthInputEl = inputEl.dataset.length;
console.log(lengthInputEl);

inputEl.addEventListener("blur", blurInput);

function blurInput(event) {
  if (event.currentTarget.value.length === Number(lengthInputEl)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
