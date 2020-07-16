var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(`${input.value} `));
  ul.appendChild(li);
  input.value = "";
  //reset input box to an empty string
  createButton(li);
  //start function that will add a button
}

function createButton(li) {
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  li.appendChild(button);
  //append button to list item
  button.onclick = removeTarget;
  //on button click, removeTarget function is called
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  let li = event.target;
  li.classList.toggle("done");
  //done class added when user clicks on a ul element
}

function removeTarget(event) {
  event.target.parentNode.remove();
  //deletes the parent of the button (list item)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);
//event lister added to the UL

//for delete item task - look at setting button class to the value as the li- may also need to look at setting class of each
//li to the value of its self.
