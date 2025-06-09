const input = document.getElementById("input");

let num = "";
let nextNum = "";
let operator = "";

function add (num, nextNum) {
return num + nextNum;
}

function subtract (num, nextNum) {
    return num - nextNum;
}

function multiply (num, nextNum) {
    return num * nextNum;
}

function divide (num, nextNum) {
    if (nextNum === 0){
        return alert("Error! You can't devide by zero");
    } else{
    return num / nextNum;
    }
}

function operate (num, operator, nextNum) {
    num = Number(num);
    nextNum = Number(nextNum);
    let result = ""
    switch(operator){
        case "+":
          result = add(num, nextNum);
        break;
        case "-": 
          result = subtract(num, nextNum);
        break;
        case "*": 
          result = multiply(num, nextNum);
        break;
        case "/": 
          result = divide(num, nextNum);
        break;
    }
    return result;
}