'use strict';

// const button = document.querySelector('.btn');

// function clicked(e) {
//   const clicked = e.target;

//   if (clicked) console.log('Button was clicked');
// }

// button.addEventListener('click', clicked);

// const ageStr = '23';
// const moneyStr = '15.48';
// console.log(typeof ageStr);
// console.log(moneyStr);

// const age = parseInt(ageStr);
// // const money = parseFloat(moneyStr);
// console.log(typeof age);

// const money = +moneyStr;

// console.log(typeof money);

// console.log('Good' + ' morning' + ' all.');

// const names = ['Alex', 'Matti', 'Juha', 'Ava'];
// console.log( ...names);

// const name = prompt('What is your name ?: ');
// const fname = prompt('Type your name.');
// console.log('Noice to meet you, ' + fname);

const button = document.querySelector('.btn');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

function changeBg(e) {
  const clicked = e.target;
  if (clicked) document.body.style.backgroundColor = randomColor();
}

button.addEventListener('click', changeBg);

const html = `I'm printing to console , but using adjasentHTML to add text on screen`;

const description = document.querySelector('.text');

description.insertAdjacentHTML('afterbegin', html);

console.log(`I'm printing to console!`);

// const age = parseInt(prompt('Enter your age:'))

// if(age > 18) console.log('You are underage:');
