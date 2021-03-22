const buttons = document.querySelectorAll("button");
const calculatorInput = document.querySelector(".calculator-input");

let temp = "";
let inputValue = "";
let boollen = true;
let s1 = 0;

buttons.forEach((e) => {
  e.addEventListener("click", function () {
    const value = e.value;
    if (e.value) {
      inputValue = value;
      temp += Number(inputValue);
      if (boollen) {
        calculatorInput.value += Number(inputValue);
      } else {
        boollen = true;
        calculatorInput.value = "";
        calculatorInput.value += value;
      }
    }
    if (calculatorInput.value != "") {
      if (e.classList.contains("plus")) {
        boollen = false;
        temp += "+";
      }
      if (e.classList.contains("minus")) {
        calculatorInput.value = eval(temp);
        boollen = false;
        temp += "-";
      }
      if (e.classList.contains("division")) {
        calculatorInput.value = eval(temp);
        boollen = false;
        temp += "/";
      }
      if (e.classList.contains("multiply")) {
        calculatorInput.value = eval(temp);
        boollen = false;
        temp += "*";
      }
      if (e.classList.contains("clear")) {
        temp = "";
        calculatorInput.value = "";
      }
      if (e.classList.contains("result")) {
        boollen = false;
        calculatorInput.value = eval(temp);
        s1 = eval(temp);
        temp = s1;
      }
    }
  });
});
