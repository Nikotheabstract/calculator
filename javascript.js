const input = document.getElementById("input");


let num = "";
let nextNum = "";
let operator = "";


function add (num, nextNum) {
    let result = num + nextNum;
    return Math.round(result * 1000) / 1000;
}

function subtract (num, nextNum) {
    let result = num - nextNum;
    return Math.round(result * 1000) / 1000;
}

function multiply (num, nextNum) {
    let result = num * nextNum;
    return Math.round(result * 1000) / 1000;
}

function divide (num, nextNum) {
  let result = num / nextNum;  
    if (nextNum === 0){
        alert("Error! You can't devide by zero");
        return "Error!"
    } else{
    return Math.round(result * 1000) / 1000;
    }
}
let operate = function (num, operator, nextNum,) {
    num = Number(num);
    nextNum = Number(nextNum);

    switch(operator){
        case "+":
          return add(num, nextNum);
        break;
        case "-": 
          return subtract(num, nextNum);
        break;
        case "*": 
          return multiply(num, nextNum);
        break;
        case "/": 
          return divide(num, nextNum);
        break;
    };
    num = ""
    nextNum = ""

}

const numbers = document.querySelectorAll('.number')


let ifTheFirst = true;

numbers.forEach(button => {
    button.addEventListener("click", () => { 
      if (ifTheFirst) {  
        num += button.textContent; 
        input.textContent = num;
      } else {
        nextNum += button.textContent;
        input.textContent = nextNum; 
      }
    });
  });

const op = document.querySelectorAll('.op:not(.equals)');

op.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        ifTheFirst = false;
        
    });
});        

const equals = document.querySelector('.equals');

equals.addEventListener("click", () => {
    input.textContent = operate(num, operator, nextNum);
    num = input.textContent;
    nextNum = "";
    ifTheFirst = true;
});

const AC = document.querySelector('.ac');

AC.addEventListener('click', () => {
    input.textContent = "";
    num = "";
    nextNum = "";
});

const DEL = document.querySelector('.del');

DEL.addEventListener('click', () => {
    let outcome = input.textContent;
    input.textContent = outcome.slice(0, -1);
})

const dot = document.querySelector('.dot');

