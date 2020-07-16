const css = document.querySelector("h3");
const colour1 = document.querySelector(".color1");
const colour2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector(".btn");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";

  addTextToPage(body.style.background);
  //adds text to css(h3) showing current linear-gradient
}

function addTextToPage(style) {
  css.textContent = `${style};`;
}

function addRandomColour() {
  colour1.value = generateRandomColour();
  colour2.value = generateRandomColour();
  setGradient();
}

function generateRandomColour() {
  let characters = "0123456789ABCDEF";
  let colour = "#";

  for (var i = 0; i < 6; i++) {
    colour += characters[Math.floor(Math.random() * 16)];
  }

  return colour;
}
colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

button.addEventListener("click", addRandomColour);

setGradient();
