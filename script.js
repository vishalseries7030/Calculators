// Function to add clicked button value to display
function addToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0') {
      display.value = ''; // Clear default '0' on first input
    }
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '0';
  }
  
  // Function to evaluate the expression in the display
  function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  }
  