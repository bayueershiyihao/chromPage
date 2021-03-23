const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = document.body.clientWidth * 0.7;
canvas.height = document.body.clientHeight * 0.7;

let mousePointerX = canvas.width / 2;
let mousePointerY = canvas.height / 2;

const buttonsPaint = document.querySelectorAll(".canvas-buttons button");
const canvasRange = document.querySelector(".canvas-range");

window.addEventListener("resize", () => {
  canvas.width = document.body.clientWidth * 0.7;
  canvas.height = document.body.clientHeight * 0.7;
  mousePointerX = canvas.width / 2;
  mousePointerY = canvas.height / 2;
});

let brushStyle = "black";
let size = 10;
let boolean = false;

function arcDraw() {
  function moveHandler(e) {
    const x = e.layerX + mousePointerX;
    const y = e.layerY + mousePointerY;

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

function changeBrushStyle() {
  buttonsPaint.forEach((e) => {
    e.addEventListener("click", (item) => {
      const target = item.target;

      if (target.classList.contains("button-black")) {
        brushStyle = "black";
      }
      if (target.classList.contains("button-red")) {
        brushStyle = "red";
      }
      if (target.classList.contains("button-blue")) {
        brushStyle = "blue";
      }
      if (target.classList.contains("button-yellow")) {
        brushStyle = "yellow";
      }
      if (target.classList.contains("button-green")) {
        brushStyle = "green";
      }
    });
  });
}

function changeRange() {
  canvasRange.addEventListener("change", () => {
    size = canvasRange.value;
  });
}

function resetArcDraw() {
  const palette = document.querySelector(".fa-palette");
  const button = document.querySelector(".canvas-buttons");
  const canvas = document.querySelector("canvas");

  palette.addEventListener("click", () => {
    if (button.classList.contains("showing")) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
}

function init() {
  arcDraw();
  changeBrushStyle();
  resetArcDraw();
  changeRange();
}

init();
