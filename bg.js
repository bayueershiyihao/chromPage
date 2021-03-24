const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `images/img${imgNumber}.jpeg`;
  img.classList.add("bg-img");

  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  paintImg(genRandom());
}

init();
