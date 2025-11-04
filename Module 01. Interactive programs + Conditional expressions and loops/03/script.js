'use strict';

const numOne = +prompt('Enter first number!: ');
const numeTwo = +prompt('Enter second number!: ');
const numeThree = +prompt('Enter third number!: ');

document.querySelector('.text').innerHTML = `Sum of three integers is ${numOne + numeTwo + numeThree}`;