"use strict";

const form = document.querySelector("#source");
const target = document.querySelector("#target");

form.addEventListener("submit", printNames);

function printNames(e) {
  e.preventDefault();
  const fname = document.querySelector("[name=firstname]").value;
  const lname = document.querySelector("[name=lastname]").value;

  const sentence = `Your name is ${fname} ${lname}`;
  target.textContent = sentence;
}
