const allButtons = document.querySelectorAll('.button');
const reset = document.getElementById('reset');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');

let outputString = '';
let printer = document.querySelector('#display');

function workIt() {
  console.log('ALL WORKING!!!!');
}

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', workIt);
}

function pressZero() {
  outputString += '0';
  printer.innerHTML = outputString;
}
function pressOne() {
  outputString += '1';
  printer.innerHTML = outputString;
}
function pressTwo() {
  outputString += '2';
  printer.innerHTML = outputString;
}
function pressThree() {
  outputString += '3';
  printer.innerHTML = outputString;
}
function pressFour() {
  outputString += '4';
  printer.innerHTML = outputString;
}
function pressFive() {
  outputString += '5';
  printer.innerHTML = outputString;
}
function pressSix() {
  outputString += '6';
  printer.innerHTML = outputString;
}
function pressSeven() {
  outputString += '7';
  printer.innerHTML = outputString;
}
function pressEight() {
  outputString += '8';
  printer.innerHTML = outputString;
}
function pressNine() {
  outputString += '9';
  printer.innerHTML = outputString;
}
function pressPlus() {
  outputString += '+';
  printer.innerHTML = outputString;
}
function pressMinus() {
  outputString += '-';
  printer.innerHTML = outputString;
}
function pressMultiply() {
  outputString += '*';
  printer.innerHTML = outputString;
}
function pressDivide() {
  outputString += '/';
  printer.innerHTML = outputString;
}
function pressEquals() {
  try {
    outputString = eval(outputString);
    printer.innerHTML = outputString;
  } catch (e) {
    printer.innerHTML = "Error";
    outputString = "";
  }
}
function pressReset() {
  outputString = '';
  printer.innerHTML = outputString;
}

















reset.addEventListener('click', pressReset);
zero.addEventListener('click', pressZero);
one.addEventListener('click', pressOne);
two.addEventListener('click', pressTwo);
three.addEventListener('click', pressThree);
four.addEventListener('click', pressFour);
five.addEventListener('click', pressFive);
six.addEventListener('click', pressSix);
seven.addEventListener('click', pressSeven);
eight.addEventListener('click', pressEight);
nine.addEventListener('click', pressNine);
plus.addEventListener('click', pressPlus);
minus.addEventListener('click', pressMinus);
multiply.addEventListener('click', pressMultiply);
divide.addEventListener('click', pressDivide);
equals.addEventListener('click', pressEquals);