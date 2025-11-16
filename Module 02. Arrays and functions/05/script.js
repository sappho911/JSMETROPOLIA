'use strict';

const numbers = [];

function userNumbers() {
  while (true) {
    const num = Number(prompt('Enter the number: '));
    if (numbers.includes(num)) {
      alert('The number has already been given, bye bye: program is stopping');
      console.log(numbers.sort((a, b) => a - b).join(' '));
      break;
    }
    numbers.push(num);
  }
}

userNumbers();

// // const numbersList = document.querySelector('.numbers');
// const numbers = [];

// function nums() {
//   while (true) {
//     const num = Number(prompt(`Enter the number: `));

//     if (num === 0) {
//       break;
//     }
//     numbers.push(num);
//   }
//   numbers.sort((a, b) => b - a);
//   return numbers;
// }

// nums();

// const printingNumbers = numbers => {
//   console.log(numbers);
// };

// printingNumbers(numbers);
// const dogsList = document.querySelector('.dogs-list');
// const count = 6;
// const dogs = [];

// function addDogs(count) {
//   for (let i = 0; i < count; i++) {
//     const name = prompt(`Enter the name of dogs ${count} times: ${i + 1}`);
//     dogs.push(name);
//   }
//   dogs.reverse();
//   return dogs;
// }

// addDogs(count);

// function printingDogs(dogs) {
//   dogs.forEach(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     dogsList.appendChild(li);
//   });
// }

// printingDogs(dogs);

// const nameList = document.querySelector('.name-list');
// const num = Number(prompt('The number of participants: '));
// const names = [];

// function numbers(number) {
//   for (let i = 0; i < number; i++) {
//     const name = prompt(`Enter the names of particiipants: ${i + 1}`);
//     names.push(name);
//   }
//   names.sort();
//   return names;
// }

// numbers(num);

// function printingNames(names) {
//   names.forEach(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     nameList.appendChild(li);
//   });
// }

// printingNames(names);

// function fiveTimes(times) {
//   const numbers = [];
//   for (let i = 0; i < times; i++) {
//     const num = Number(prompt(`Enter the number ${times} times ${i + 1}`));
//     numbers.push(num);
//   }
//   const reversed = [];
//   for (let j = numbers.length - 1; j >= 0; j--) {
//     reversed.push(numbers[j]);
//   }
//   document.querySelector(
//     '.original'
//   ).innerHTML = `Original Array ${numbers.join(' ')}`;
//   document.querySelector(
//     '.reversed'
//   ).innerHTML = `Reversed Array ${reversed.join(' ')}`;

//   return reversed;
// }

// fiveTimes(5);

// const numbers = [];

// numbers[0] = 17;
// numbers[1] = 2;
// numbers[2] = 8;

// console.log(numbers);

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Name: ${names[i]}`);
// }

// for (name of names) {
//   console.log(`Name: ${name}`);
// }

// const student = {
//   firstName: 'Greg',
//   lastName: 'Focker',
//   studentId: '234359',
//   phone: '040 5902123',
// };

// const greeting = `Hello, my name is ${student.firstName} ${student.lastName}`;
// const studentInfo = `student number: ${student['studentId']}, phone number ${student['phone']}`;
// console.log(greeting);
// console.log(studentInfo);

// console.log('---------------------------');

// student.address = `Schoolroad7`;
// delete student.phone;
// console.log(student);

// console.log('--------------');

// const chosenProperty = 'lastName';
// console.log(student[chosenProperty]);

// const student2 = {
//   firstName: 'Ahmed',
//   lastName: 'Hussein',
//   credits: 175,
//   hasLeft: function () {
//     return 240 - this.credits;
//   },
// };

// console.log(
//   'Student ' +
//     student2.firstName +
//     ' is missing ' +
//     student2.hasLeft() +
//     ' credits.'
// );

// function greet(text, times) {
//   for (let i = 1; i <= times; i++) {
//     console.log(text + ' ' + i + ' .time!');
//   }
//   return;
// }
// greet('Hello', 4);

// function quadraticSum(first, second) {
//   const result = first * first + second * second;
//   return result;
// }

// const num1 = prompt('Enter 1. number');
// const num2 = prompt('Enter 2. number');
// const quad = quadraticSum(num1, num2);

// console.log(`The quadratic sum of ${num1} and ${num2} is ${quad}`);

// const n1 = 3; // global variable

// function hello() {
//   var n2 = 5; //an internal veriable of a function

//   if (n2 > 0) {
//     const n3 = 8;
//     var n4 = 9;
//   }
//   console.log(`n1: ${n1}`);
//   console.log(` n2: ${n2}`);
//   console.log(` n4 : ${n4}`);
// }

// hello();

// console.log(`last n1: ${n1}`);

// function grow(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i]++;
//   }
//   return;
// }

// const numbers = [5, 6, 7];
// grow(numbers);

// console.log(`${numbers.join(' ')}`);

// function doLottery(numbers, num) {
//   const row = [];
//   let r;
//   for (let i = 0; i < num; i++) {
//     let ok = false;

//     while (!ok) {
//       ok = true;
//       r = Math.floor(Math.random() * numbers) + 1;
//       for (let j = 0; j < i + 1; j++) {
//         if (row[j] === r) {
//           ok = false;
//         }
//       }
//     }
//     row[i] = r;
//   }
//   return row;
// }

// const lottery = doLottery(40, 7);
// for (let i = 0; i < lottery.length; i++) {
//   console.log(lottery[i]);
// }
