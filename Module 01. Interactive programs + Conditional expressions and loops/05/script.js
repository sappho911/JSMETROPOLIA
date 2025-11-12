'use strict';

const year = +prompt('Enter a year!: ');

if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
  document.querySelector('.text').innerHTML = `${year} is leap year!`;
} else {
  document.querySelector('.text').innerHTML = `${year} is not leap year!`;
}