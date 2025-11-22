const button = document.querySelector("#start");
const p = document.querySelector("#result");

button.addEventListener("click", calculate);

function calculate() {
  const calculation = document.querySelector("#calculation").value;

  if (calculation.includes("+")) {
    console.log("Adding");
    const splitted = calculation.split("+");

    p.textContent = Number(splitted[0]) + Number(splitted[1]);
  }
  if (calculation.includes("-")) {
    console.log("Substructing");
    const splitted = calculation.split("-");

    p.textContent = Number(splitted[0]) - Number(splitted[1]);
  }
  if (calculation.includes("/")) {
    console.log("dividing");
    const splitted = calculation.split("/");

    p.textContent = Number(splitted[0]) / Number(splitted[1]);
  }
  if (calculation.includes("*")) {
    console.log("Multiply");
    const splitted = calculation.split("*");

    p.textContent = Number(splitted[0]) * Number(splitted[1]);
  }
}
