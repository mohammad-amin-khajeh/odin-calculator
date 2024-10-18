import calculate from "./Equals.js";

const display = document.getElementById("display");
const numbers = document.getElementsByClassName("number");
function handleNumbes() {
  for (const number of numbers) {
    number.addEventListener(
      "click",
      (e) => (display.innerText += e.target.innerText),
    );
  }
}

const float = document.getElementById("float");
function handleFloat() {
  float.addEventListener("click", () =>
    !display.innerText.includes(".") ? (display.innerText += ".") : "",
  );
}

const operations = document.querySelectorAll(".operation");
function handleOperators() {
  for (const operation of operations) {
    operation.addEventListener("click", (e) =>
      !"+÷×-".includes(display.innerText[display.innerText.length - 1])
        ? (display.innerText += e.target.innerText)
        : "",
    );
  }
}

const equal = document.getElementById("equal");
function handleEqual(display) {
  equal.addEventListener("click", () => {
    display.innerText = calculate(display.innerText);
  });
}

handleNumbes();
handleFloat();
handleOperators();
handleEqual(display);
