'use strict';

const diceRolls = +prompt('How many dice rolls?: ');
const diceSum = +prompt('Enter the sum you are interested in:');
const repetitions = 10000;
let succes = 0;

const randomDice = () => Math.floor(Math.random() * 6) + 1;

for (let j = 0; j < repetitions; j++) {
  let sum = 0;
  for (let i = 0; i < diceRolls; i++) {
    sum += randomDice();
  }
  if (sum === diceSum) succes++; 
}

const probability = (succes / repetitions) * 100;

document.querySelector(
  '.text'
).innerHTML = ` Probability to get sum ${diceSum} with ${diceRolls} dice is ${probability.toFixed(2)} %`;
