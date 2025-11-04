'use strict';

let sum = 0;

const diceRolls = +prompt('How many dice rolls?: ');

const randomDice = () => Math.floor(Math.random() * 6) + 1;

for (let i = 1; i <= diceRolls; i++) {
  const rolledDice = randomDice();
  // console.log(`rolledDice ${rolledDice} times ${i}`);
  sum += rolledDice;
}

document.querySelector('.text').innerHTML = `Dice rolled ${diceRolls} times and Sum ${sum}`;