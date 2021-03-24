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
        clearInterval(timerInterval);

        if (!calculator.classList.contains("showing")) {
          calculator.classList.toggle("showing");
        }
        if (!typingGame.classList.toggle("showing")) {
          typingGame.classList.toggle("showing");
        }
      }
      if (target.classList.contains("fa-calculator")) {
        calculator.classList.toggle("showing");
        clearInterval(timerInterval);

        if (!appCanvas.classList.contains("showing")) {
          appCanvas.classList.toggle("showing");
          button.classList.toggle("showing");
        }
        if (!typingGame.classList.toggle("showing")) {
          typingGame.classList.toggle("showing");
        }
      }
      if (target.classList.contains("fa-keyboard")) {
        typingGame.classList.toggle("showing");

        if (!typingGame.classList.contains("showing")) {
          timerCount();
        } else {
          clearInterval(timerInterval);
        }
        if (!appCanvas.classList.contains("showing")) {
          appCanvas.classList.toggle("showing");
          button.classList.toggle("showing");
        }
        if (!calculator.classList.contains("showing")) {
          calculator.classList.toggle("showing");
        }
      }
    });
  });
}

function init() {
  showing();
}

init();
