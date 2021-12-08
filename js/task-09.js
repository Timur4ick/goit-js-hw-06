function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  spanNameColor: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
};
refs.colorBtn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  //console.log(event);
  refs.spanNameColor.textContent = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  document.body.style.backgroundColor = getRandomHexColor();
}
