const appItem = document.querySelectorAll(".app-item");

function showing() {
  appItem.forEach((e) => {
    e.addEventListener("click", (item) => {
      const target = item.target;
      if (target.classList.contains("fa-palette")) {
        const button = document.querySelector(".canvas-buttons");
        const canvas = document.querySelector("canvas");
        canvas.classList.toggle("showing");
        button.classList.toggle("showing");
      }
      if (target.classList.contains("fa-calculator")) {
        const calculator = document.querySelector(".calculator");
        calculator.classList.toggle("showing2");
      }
    });
  });
}

function init() {
  showing();
}

init();
