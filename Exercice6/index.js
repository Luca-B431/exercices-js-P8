function appendToDisplay(value) {
  let display = document.getElementById("display");
  if (display) {
    display.value += value;
  }
}

function clearDisplay() {
  let display = document.getElementById("display");
  if (display) {
    display.value = "";
  }
}

function calculateResult() {
  let display = document.getElementById("display");
  if (display) {
    if (display.value !== "12/0") {
      display.value = eval(display.value);
    } else {
      display.value = "Division by zero is not allowed";
    }
  }
}

window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculateResult = calculateResult;
