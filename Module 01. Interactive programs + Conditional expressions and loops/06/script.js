'use strict';

const answer = confirm('Should i calculate square root?: ');

if (answer) {
  const number = +prompt('Enter the number to calculate square root: ');
  if (number < 0) {
    document.querySelector(
      '.text'
    ).innerHTML = `You cannot calculate the square root of a negative number.`;
  } else {
    // console.log('True');
    const sqrtRoot = Math.sqrt(number);
    document.querySelector(
      '.text'
    ).innerHTML = `Square root of ${number} is ${sqrtRoot}`;
  }
}

if (!answer) {
  console.log('The square root is not calculated.');
}
