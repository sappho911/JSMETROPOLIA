"use strict";
const result = document.querySelector("#result");
const button = document.querySelector("#start");

button.addEventListener("click", calculate);

function calculate() {
  const operation = document.querySelector("#operation").value;
  const num1 = +document.querySelector("#num1").value;
  const num2 = +document.querySelector("#num2").value;

  switch (operation) {
    case "add":
      result.textContent = num1 + num2;
      break;
    case "sub":
      result.textContent = num1 - num2;
      break;
    case "multi":
      result.textContent = num1 * num2;
      break;
    case "div":
      result.textContent = num1 / num2;
  }
}
