"use strict";

const pEl = document.querySelector("#trigger");
const img = document.querySelector("#target");

pEl.addEventListener("mouseover", (e) => {
  const onFocus = e.target;
  if (onFocus) img.src = "img/picB.jpg";
  //   console.log("Mouse on text");
});

pEl.addEventListener("mouseout", (e) => {
  const mouseOff = e.target;
  if (mouseOff) img.src = "img/picA.jpg";
  //   console.log("Mouse out of text");
});
