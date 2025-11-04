'use strict';

const start = +prompt('Enter the start year: ');
const end = +prompt('Enter the end year:');

const list = document.querySelector('.leap');
list.innerHTML = '';

for (let year = start; year <= end; year++) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    const li = document.createElement('li');
    li.textContent = year;
    list.appendChild(li);
  }
}

// if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
//   document.querySelector('.text').innerHTML = `${year} is leap year!`;
// } else {
//   document.querySelector('.text').innerHTML = `${year} is not leap year!`;
// }
