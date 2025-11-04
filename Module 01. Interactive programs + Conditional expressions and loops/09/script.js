'use strict';

const number = +prompt('Enter the number:');
let isPrime = true;

if (number === 1) {
  document.querySelector('.text').innerHTML = `Numbers need to bee mor ethan 1`;
} else if (number > 1) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  document.querySelector('.text').innerHTML = `Number ${number} is prime!`;
} else {
  document.querySelector('.text').innerHTML = `Number ${number} is not prime!`;
}
