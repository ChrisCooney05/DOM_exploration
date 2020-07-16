const css = document.querySelector("h3");
const colour1 = document.querySelector(".color1");
const colour2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";

  addTextToPage(body.style.background);
  //adds text to css(h3) showing current linear-gradient
}

function addTextToPage(style) {
  css.textContent = `${style};`;
}

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

setGradient();
