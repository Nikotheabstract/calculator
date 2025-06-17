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

document.addEventListener("keydown", (event) => {
  const valid = ['0','1','2','3','4','5','6','7','8','9']
  if (valid.includes(event.key)){
    if (ifTheFirst) {  
      num += event.key; 
      input.textContent = num;
    } else {
      nextNum += event.key;
      input.textContent = nextNum; 
    };
  }; 
});  

const op = document.querySelectorAll('.op:not(.equals, .dot)');

op.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        ifTheFirst = false;
    });
});    

document.addEventListener("keydown", (event) => {
  let key = event.key;

  if (event.shiftKey && event.key === '=') {
    key = '+';
  } else if (event.shiftKey && event.key === '8') {
    key = '*';
  };

  const valid = ['+','-','*','/'];
  if (valid.includes(key)){
    operator = key;
    ifTheFirst = false;
  };
});

const equals = document.querySelector('.equals');

equals.addEventListener("click", () => {
    input.textContent = operate(num, operator, nextNum);
    num = input.textContent;
    nextNum = "";
    ifTheFirst = true;
    console.log("EQUALS triggered", { num, operator, nextNum });

});

document.addEventListener("keydown", (event) => {
  if (event.key === "=" || event.key === "Enter") {
    input.textContent = operate(num, operator, nextNum);
    num = input.textContent;
    nextNum = "";
    ifTheFirst = true;
  }
  console.log("EQUALS triggered", { num, operator, nextNum });

});

const AC = document.querySelector('.ac');

AC.addEventListener('click', () => {
    input.textContent = "";
    num = "";
    nextNum = "";
});

const DEL = document.querySelector('.del');

DEL.addEventListener('click', () => {
  if (ifTheFirst) {
    num = num.slice(0, -1);
    input.textContent = num;
  } else {
    nextNum = nextNum.slice(0, -1);
    input.textContent = nextNum;
  };
  
});

const dot = document.querySelector('.dot');


  dot.addEventListener('click', () => {
    if (ifTheFirst) {
      if (!num.includes('.')) {
        num += '.';
        input.textContent = num;
      }
    } else {
      if (!nextNum.includes('.')) {
        nextNum += '.';
        input.textContent = nextNum;
      }
    }
  });


