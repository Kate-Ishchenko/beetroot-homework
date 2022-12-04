 
// друге завдання
let one = "1"
let two = 2;

let sum = Number(one) + two;

console.log(sum)

 // третя завдання
function convertGb(gb) {
    let mb = 1024;
    let file = 820;
    let files = gb * mb / file
    return files;
}

console.log(convertGb(5))

// перше завдання

let num1 = parseFloat("0,1".replace(/,/, "."));
let num2 = parseFloat("0,2".replace(/,/, "."));

let mySum = num1 + num2;

console.log(mySum)

// взято з https://stackoverflow.com/questions/7571553/javascript-parse-float-is-ignoring-the-decimals-after-my-comma
