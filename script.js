let display = document.getElementById("display");

function append(value) {
  if (display.textContent === "0" || display.textContent === "Cannot divide by zero" || display.textContent === "Division by zero is not allowed for modulus operation.") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  try {
    if (display.textContent.includes("/0")) {
      display.textContent = "Cannot divide by zero";
    } else if (display.textContent.includes("%0")) {
      display.textContent = "Division by zero is not allowed for modulus operation.";
    } else {
      let result = eval(display.textContent);
      display.textContent = result;
    }
  } catch {
    display.textContent = "Error";
  }
}
