const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  addTextToPage(body.style.background);
  //adds text to css(h3) showing current linear-gradient
}

function addTextToPage(style) {
  css.textContent = `${style};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
