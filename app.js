
function add(...args){ // can add as much numbers as you want
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}

function subtract(num1, ...args){ //subtracts from the first number only, as much numbers as you want
    let result = num1
    for(let arg of args){
        result -= arg
    }
    return result;
}

function multiply(...nums){ // can multiply as much as numbers as you want
    let product = 1;
    for(let num of nums){
        product *= num
    }
    return product;
}

function divide(num1, ...args){ //divides the first number by the numbers following after
    let result = num1
    for(let arg of args){
        if(arg === 0){ //will detect if you are trying to divide by 0
            return "ERROR Divide by 0" //divide by 0 error
        } else {
            result /= arg
        }
    }
    return result;
}

function operate(operator, num1, num2){
    switch(operator){
        case "add": 
            return add(num1, num2)
            break;
        case "subtract":
            return subtract(num1, num2)
            break;
        case "multiply":
            return multiply(num1,num2)
            break;
        case "divide":
            return divide(num1,num2)
            break;
    }
}

const displayValue = document.getElementById("display")
const numberButtons = document.querySelectorAll("input") //selects all the input elements and puts into an array
const operatorButtons = document.querySelectorAll(".operator") // selects all the elements with class of operator
const equalButton = document.getElementById("equal")
let firstNum = "" //loads the firstNum as an empty string;

numberButtons.forEach(number => { //loops over the array and for each input value
    number.addEventListener("click", function(e){ //add an event listener of "click" which will run the function
        if(number.value === "."){
            addDecimal()
        } else if(number.value === "AC"){
            clearDisplay()
        } else if(number.value === '<--'){
            deleteNumber()
        }  else if(number.value === "%"){
            displayValue.textContent = (displayValue.textContent)/100 //turns number into a percentage
        }else if (number.className === "operator"){
            firstNum = parseInt(displayValue.textContent)
            secondNum = parseInt(displayValue.textContent)
            if(firstNum && operator !== null){
                displayValue.textContent = operate(operator, firstNum, secondNum)
                firstNum = displayValue.textContent
            } else if (number.value === "/"){
                operator = "divide"
            } else if (number.value === "-"){
                operator = "subtract"
            } else if (number.value === "x"){
                operator = "multiply"
            } else {
                operator = "add"
            }
        } else if (number.value === "="){
            secondNum = parseInt(displayValue.textContent )// second number is the number that is after the operator
            displayValue.textContent = operate(operator, firstNum, secondNum) //(Math.round(results * 100)/100).toFixed(2);
        } else {
            if(displayValue.textContent === "0"){ //the calculator's display will start at 0
                displayValue.textContent = number.value; //then it will become whatever number is clicked
            } else if (firstNum == parseInt(displayValue.textContent)){
                displayValue.textContent = number.value;
            } else {
                displayValue.textContent += number.value; //afterwards it will join other numbers behind it
                console.log(displayValue.textContent)
            }
        }
    });
});


function addDecimal(){
    if(displayValue.textContent.indexOf(".") === -1){ //checks if the number has a decimal in it, if it does then do nothing
        displayValue.textContent += "." //if there is no decimal added yet, then it adds a decimal 
    }
}

function clearDisplay(){
    displayValue.textContent = "0" //clears the display back to 0
    firstNum = null;
    secondNum = null;
    operator = null;
}

function deleteNumber(){
        if(displayValue.textContent === "0"){ // does not do anything if the display is 0
            return
        } else if(displayValue.textContent.length === 1){ //when it is on the last digit
            displayValue.textContent = "0" //display will just turn back to 0
        } else {
            displayValue.textContent = displayValue.textContent.slice(0,-1) //otherwise it will just remove the last digit 
        }
}

function setNumber(value){
    if (firstNum == null){
        firstNum = value;
    } else {
        secondNum = value;
    }
}

// keyboard support for entering numbers and backspace function
window.addEventListener("keydown", function(event){
    if(event.key <= 9){
        if(displayValue.textContent === "0"){ //the calculator's display will start at 0
            displayValue.textContent = event.key; //then it will become whatever number is clicked
        } else if (firstNum == parseInt(displayValue.textContent)){
            displayValue.textContent = event.key;
        } else {
            displayValue.textContent += event.key; //afterwards it will join other numbers behind it
        }
    } else if (event.key === "*"){
        firstNum = parseInt(displayValue.textContent);
        operator = "multiply";
    } else if (event.key === "/"){
        firstNum = displayValue.textContent;
        operator = "divide";
    } else if (event.key === "+"){
        operator = "add";
        firstNum = displayValue.textContent;
    } else if (event.key === "-" || event.key === "_"){
        operator = "subtract";
        firstNum = displayValue.textContent;
    } else if(event.key === "Backspace") {
        displayValue.textContent = 0;
    } else if(event.key === "."){
        if(displayValue.textContent.indexOf(".") === -1){ //checks if the number has a decimal in it, if it does then do nothing
            displayValue.textContent += "." //if there is no decimal added yet, then it adds a decimal 
        }
    } else if(event.key === "Enter"){
        alert('Calculating...')
        displayValue.textContent = operate(operator, firstNum, parseInt(displayValue.textContent));
    }
})


// switch(operator){
//     case '+':
//         displayValue.textContent = firstNum + secondNum
//         break;
//     case '-':
//         subtract(firstNum, secondNum)
// }