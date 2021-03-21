const form = document.querySelector("form");
const input = document.querySelector(".name");
const grettings = document.querySelector(".grettings");

const NAME_LS = "name";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function paintingText(text) {
  if (text != "") {
    grettings.innerText = `${text}`;
    form.classList.add(SHOWING_CN);
    input.value = "";
  }
}

function askForName() {
  form.classList.remove(SHOWING_CN);
}

function submitHandler(e) {
  e.preventDefault();
  const value = input.value;
  paintingText(value);
  saveName(value);
}

function loadName() {
  const currentItem = localStorage.getItem(NAME_LS);
  if (currentItem === null) {
    askForName();
  } else {
    paintingText(currentItem);
  }
}

function init() {
  loadName();
  form.addEventListener("submit", submitHandler);
}

init();
