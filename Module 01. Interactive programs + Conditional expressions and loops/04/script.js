'use strict';

const classes = ['Gryfinndoor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const name = prompt('Enter the name: ');
const randomRoom = Math.floor(Math.random() * 4);
// console.log(randomRoom);

document.querySelector('.text').innerHTML = `${name}, you are ${classes[randomRoom]}`