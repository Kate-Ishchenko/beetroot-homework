const input = document.getElementById("main-input");
const answer = document.getElementById("age-answer");
const ageBtn = document.getElementById("age-btn");
const symbolBtn = document.getElementById("symbol-btn");
const sumBtn = document.getElementById("sum-btn");
const dividerBtn = document.getElementById("divider-btn");
const allDividersBtn = document.getElementById("all-dividers-btn");

ageBtn.addEventListener("click", ageValidation);
symbolBtn.addEventListener("click", showSymbol);
sumBtn.addEventListener("click", getSum);
dividerBtn.addEventListener("click", getTwoNumbers);
allDividersBtn.addEventListener("click", onHandleDivisorsList);

function ageValidation(e) {
  const { value } = input;
  if (value >= 1 && value <= 11) {
    return (answer.innerText = "You're a child");
  } else if (value >= 12 && value <= 17) {
    return (answer.innerText = "You're a teenager");
  } else if (value >= 18 && value <= 59) {
    return (answer.innerText = "You're adult");
  } else if (value >= 60) {
    return (answer.innerText = "You're a pensioner");
  } else if (value < 1 || value > 120 || isNaN(value)) {
    return (answer.innerText = "Please, enter correct value");
  }
}

function showSymbol() {
  const value = parseInt(input.value, 10);
  let symbol;
  switch (value) {
    case 1:
      symbol = "!";
      break;
    case 2:
      symbol = "@";
      break;
    case 3:
      symbol = "#";
      break;
    case 4:
      symbol = "$";
      break;
    case 5:
      symbol = "%";
      break;
    case 6:
      symbol = "^";
      break;
    case 7:
      symbol = "&";
      break;
    case 8:
      symbol = "*";
      break;
    case 9:
      symbol = "(";
      break;
    case 0:
      symbol = ")";
      break;
    default:
      symbol = "you need a number between 0 and 9";
  }
  answer.innerText = symbol;
}

function getSum() {
  const { value } = input;
  const myRegEx = /^\d+[-,\s]\d+$/g;
  if (!myRegEx.test(value)) {
    answer.innerText = "You need follow next patterns: 0-10; 0,10; 0 10";
    return;
  }
  const myArray = value.split(/[-,\s]/g).sort((a, b) => a - b, 0);
  let sum = 0;
  for (let i = myArray[0]; i <= myArray[1]; i++) {
    sum += Number(i);
  }
  answer.innerText = sum;
}

function getTwoNumbers() {
  const { value } = input;
  const myRegEx = /^\d+[-,\s]\d+$/g;
  if (!myRegEx.test(value)) {
    answer.innerText = "You need follow next patterns: 0-10; 0,10; 0 10";
    return;
  }
  const myArray = value.split(/[-,\s]/g).sort((a, b) => a - b, 0);
  const result = gcd(...myArray);
  answer.innerText = result;
}

function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}


function getDivisors(n){
  let divisors = [];
  mod = n;
  while (mod > 0){
    if(n % mod === 0){
      divisors.push(mod);
    }
    mod--;
  }
  return divisors.join(", ");
}

function onHandleDivisorsList() {
  const value = parseInt(input.value, 10);
  if(isNaN(value)) {
    answer.innerText = "You need to enter a number"
    return;
  }
  const result = getDivisors(value);
  answer.innerText = result;
}