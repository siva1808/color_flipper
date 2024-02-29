const color = document.getElementById("color");
const wrapcolor = document.getElementById("wrap");
const btn = document.getElementById("btn");

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", changeBg);

function changeBg() {
  let hashhex = "#";
  for (i = 1; i <= 6; i++) {
    hashhex += hexcolorvalue();
  }
  wrapcolor.style.backgroundColor = hashhex;
  color.innerHTML = hashhex;
}

function hexcolorvalue() {
  const randomhex = Math.floor(Math.random() * 16);
  const hexchange = hex[randomhex];
  return hexchange;
}
