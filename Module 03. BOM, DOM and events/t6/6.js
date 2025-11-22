"use strict";

const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  const clicked = e.target;

  if (clicked) alert("Button Clicked");
  // clicked ? alert("Clicked") : console.log("Not clicked");
});
