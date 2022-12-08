 
// перше завдання

function myFunction1(x) {
    return x;
}

const myFunction2 = function(x) {
    return x;
}

const myFunction3 = (x)=> {
    return x;
}

// друге завдання

function func1(a, b, c) {
    console.log(arguments.length);
  }
  
  func1("a", "b", "c");

// третє завдання

function compareNumbers(num1, num2) {
    if(num1 < num2) {
        return -1;
    } else if(num1 > num2) {
        return 1;
    } else {
        return 0
    }
}

console.log(compareNumbers(2,5))
console.log(compareNumbers(5,2))
console.log(compareNumbers(3,3))

// четверте завдання 

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  console.log(factorialize(5));

// пяте завдання

function sumNumbers(num1, num2, num3) {
    return String(num1) + String(num2) + String(num3);
}

console.log(sumNumbers(1,4,9))

// шосте завдання

function getArea(width = height, height = width) {
    return width * height;
}

console.log(getArea(10, 4))
console.log(getArea(5))
