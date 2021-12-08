let counterValue = 0;

const descrEl = document.querySelector("[data-action='decrement']");
const incrEl = document.querySelector("[data-action='increment']");

const decrement = () => {
  counterValue -= 1;

  document.querySelector("#value").textContent = counterValue;
};

const increment = () => {
  counterValue += 1;

  document.querySelector("#value").textContent = counterValue;
};
descrEl.addEventListener("click", decrement);
incrEl.addEventListener("click", increment);
