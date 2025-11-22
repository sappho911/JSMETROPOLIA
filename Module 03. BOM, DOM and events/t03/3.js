"use strict";
const names = ["John", "Paul", "Jones"];
const target = document.querySelector("#target");
// console.log(target);

names.forEach((name) => {
  const list = document.createElement("li");
  list.textContent = `${name}`;
  target.appendChild(list);
});
// for (let i = 0; i < names.length; i++) {
//   const list = document.createElement("li");
//   if (i === 0) {
//     list.textContent = `${names[0]}`;
//   }
//   if (i === 1) {
//     list.textContent = `${names[1]}`;
//   }
//   if (i === 2) {
//     list.textContent = `${names[2]}`;
//   }
//   target.appendChild(list);
// }
