const screen = document.querySelector('.screen')
const operator = ['+','-','X','/']

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

        }else continue;
    }console.log([operator, firstNum]) 
}


//Math functions

function add(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++){
       sum = args[i] + sum;
    }
    console.log(`the sum is ${sum}`)
  }
  
  function subtract(...args){
    let difference = args[0];
    for (let i = 1; i < args.length; i++){
       difference = difference - args[i];
    }
    console.log(`the difference is ${difference}`)
  }
  
  function multiply(...args){
    let product = args[0];
    for (let i = 1; i < args.length; i++){
       product = product * args[i];
    }
    console.log(`the product is ${product}`)
  }
  
  function divide(...args){
    let quotient = args[0];
    for (let i = 1; i < args.length; i++){
       quotient = quotient / args[i];
    }
    console.log(`the quotient is ${quotient}`)
  }
  
  function operate(operator, num1, num2){
    if (operator == 'add'){
      add(num1,num2)
    }else if (operator == 'subtract'){
      subtract(num1,num2)
    }else if (operator == 'multiply'){
      multiply(num1,num2)
    }else if (operator == 'divide'){
      divide(num1,num2)
    }else console.log('error')
  }
  