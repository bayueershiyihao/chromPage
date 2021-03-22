const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let brushStyle = "black";
let size = 10;
let boolean = false;

function arcDraw() {
  function moveHandler(e) {
    const x = e.layerX + 150;
    const y = e.layerY + 200;
    console.log(x, y);
    if (boolean) {
      ctx.beginPath();
      ctx.arc(x, y, size, Math.PI * 2, 0, false);
      ctx.fillStyle = brushStyle;
      ctx.fill();
    }
  }

  function downHandler() {
    boolean = true;
  }

  function upHandler() {
    boolean = false;
  }

  canvas.addEventListener("mousedown", downHandler);
  canvas.addEventListener("mousemove", moveHandler);
  canvas.addEventListener("mouseup", upHandler);
}

function init() {
  arcDraw();
}

init();
