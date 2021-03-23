const appItem = document.querySelectorAll(".app-item");
const calculator = document.querySelector(".calculator");
const button = document.querySelector(".canvas-buttons");
const appCanvas = document.querySelector("canvas");
function showing() {
  appItem.forEach((e) => {
    e.addEventListener("click", (item) => {
      const target = item.target;
      if (target.classList.contains("fa-palette")) {
        appCanvas.classList.toggle("showing");
        button.classList.toggle("showing");

        if (!calculator.classList.contains("showing2")) {
          calculator.classList.toggle("showing2");
        }
      }
      if (target.classList.contains("fa-calculator")) {
        calculator.classList.toggle("showing2");

        if (!appCanvas.classList.contains("showing")) {
          appCanvas.classList.toggle("showing");
          button.classList.toggle("showing");
        }
      }
    });
  });
}

function init() {
  showing();
}

init();
