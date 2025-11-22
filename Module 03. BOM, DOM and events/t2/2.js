// Add class my-list to the element with id="target"
// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target"

const target = document.querySelector(".my-list");
console.log(target);

const firstEl = document.createElement("li");
firstEl.textContent = `First Item`;

target.appendChild(firstEl);

const secondEl = document.createElement("li");
secondEl.classList.add("my-item");
secondEl.textContent = `Second Item`;

target.appendChild(secondEl);

const thirdEl = document.createElement("li");
thirdEl.textContent = `Third Item`;

target.appendChild(thirdEl);

// for (let i = 0; i < 3; i++) {
//   const list = document.createElement("li");
//   if (i === 0) {
//     list.textContent = "First Item";
//   }
//   if (i === 1) {
//     list.textContent = `Second Item`;
//   }
//   if (i === 2) {
//     list.textContent = `Third Item`;
//   }
//   target.appendChild(list);
// }
