function getButtonValue(id) {
    const value =document.getElementById(id).innerText;
    document.getElementById('display1').innerText += value;
  }
function calculate() {
    const result = eval(document.getElementById('display1').innerText);
    document.getElementById('display2').innerText = result;
    document.getElementById('display1').innerText = '';
  }
function clearDisplay(id) {
    if (id ==true) {
      document.getElementById('display1').innerText = '';
      document.getElementById('display2').innerText = '';
    } else {
    const currentDisplay= document.getElementById('display1').innerText;
    const newDisplay = currentDisplay.slice(0,-1);
    document.getElementById('display1').innerText = newDisplay;
    }  
  }