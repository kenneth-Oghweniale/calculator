function appendValue(value) {
    document.getElementById("display").value += value;
  }
  function appendOperator(operator) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) return;
    display.value += operator;
  }
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function calculateResult() {
    let display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (e) {
      alert("Invalid expression");
      clearDisplay();
    }
  }