const output = document.getElementById("output");
  
  function handleButtonClick(event) {
    const target = event.target;
    if (target.matches("button")) {
      const value = target.getAttribute("data-value");
      
      if (value === "=") {
        calculate();
      } else if (value === "C") {
        clearOutput();
      } else {
        appendToOutput(value);
      }
    }
  }
  
  function appendToOutput(value) {
    if (output.textContent === "0" && value !== ".") {
      output.textContent = "";
    }
    output.textContent += value;
  }
  
  function clearOutput() {
    output.textContent = " 0";
  }
  
  function calculate() {
    
      const result = evaluateExpression(output.textContent);
      output.textContent = result;
   
  }
  
  function evaluateExpression(expression) {
    return new Function('return ' + expression)();
  }