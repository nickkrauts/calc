const screen = document.querySelector('.screen')
const operators = ['+','-','X','/']

//add buttonChosen function to each button
const buttons = document.querySelectorAll('button')
buttons.forEach((button, index) => {
    button.setAttribute('onClick', "buttonChosen(this.textContent)")
})

//When a button is clicked, log which button was clicked
function buttonChosen(clicked)
{   
    
    screen.textContent += clicked;
    console.log(clicked, screen.textContent);
    //clear screen when AC button clicked
    if(clicked == 'AC'){
      screen.textContent = '';
    }
    
    parseInput(screen.textContent)
    
}

//parse input to get numbers and operators alone
function parseInput(string){
  let operator = '';
  let firstNum = '';
  let secondNum = '';
    for(let i = 0; i < string.length; i++){
        if((string.charAt(i) == '+')
         ||(string.charAt(i) == '-')
         ||(string.charAt(i) == 'x')
         ||(string.charAt(i) == '/')){
          operator = string.charAt(i)
          //Get numbers and operator alone and store in variables
          firstNum = string.slice(0,i).trim();
          firstNum = parseInt(firstNum);
          secondNum = string.slice((i+1)).trim();
          secondNum = parseInt(secondNum);
        }else if(string.charAt(i) == '='){
          operate(operator, firstNum, secondNum);
          break;
        }else continue;
    }console.log([operator, firstNum, secondNum]) 
}

//Math functions

function add(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++){
       sum = args[i] + sum;
    }
    console.log(`the sum is ${sum}`)
    screen.textContent = sum;
  }
  
  function subtract(...args){
    let difference = args[0];
    for (let i = 1; i < args.length; i++){
       difference = difference - args[i];
    }
    console.log(`the difference is ${difference}`)
    screen.textContent = difference;

  }
  
  function multiply(...args){
    let product = args[0];
    for (let i = 1; i < args.length; i++){
       product = product * args[i];
    }
    console.log(`the product is ${product}`)
    screen.textContent = product;
  }
  
  function divide(...args){
    let quotient = args[0];
    for (let i = 1; i < args.length; i++){
       quotient = quotient / args[i];
    }
    console.log(`the quotient is ${quotient}`)
    screen.textContent = quotient;

  }
  
  function operate(operator, num1, num2){
    if (operator == '+'){
      add(num1,num2)
    }else if (operator == '-'){
      subtract(num1,num2)
    }else if (operator == 'x'){
      multiply(num1,num2)
    }else if (operator == '/'){
      divide(num1,num2)
    }else console.log('error')
  }
  