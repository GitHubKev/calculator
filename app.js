
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
    if(operator === "add"){
        return add(num1,num2)
    } else if(operator === "subtract"){
        return subtract(num1,num2)
    } else if(operator === "multiply"){
        return multiply(num1,num2)
    } else {
        return divide(num1,num2)
    }
}

const displayValue = document.getElementById("display")
const numberButtons = document.querySelectorAll("input") //selects all the input elements and puts into an array
const operatorButtons = document.querySelectorAll(".operator") // selects all the elements with class of operator
const equalButton = document.getElementById("equal")

numberButtons.forEach(number => { //loops over the array and for each input value
    number.addEventListener("click", function(e){ //add an event listener of "click" which will run the function
        if(number.value === "."){
            if(displayValue.textContent.indexOf(".") === -1){ //checks if the number has a decimal in it, if it does then do nothing
                displayValue.textContent += "." //if there is no decimal added yet, then it adds a decimal 
            }
        } else if(number.value === "<--"){
            displayValue.textContent = displayValue.textContent.slice(0,-1) //removes the last digit 
        } else if(number.value === "AC"){
            displayValue.textContent = "0" //clears the display back to 0
            firstNum = ""
            secondNum = ""
        } else if(number.value === "%"){
            displayValue.textContent = (displayValue.textContent)/100 //turns number into a percentage
        } else if (number.value === "="){
            secondNum = displayValue.textContent // second number is the number that is after the operator
            displayValue.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum)) //performs the calculation
        }else if (number.className === "operator"){
            firstNum = displayValue.textContent

            if(number.value === "/"){
                operator = "divide"
                displayValue.textContent = ""
            } else if (number.value === "-"){
                operator = "subtract"
                displayValue.textContent = ""
            } else if (number.value === "x"){
                operator = "multiply"
                displayValue.textContent = ""
            } else {
                operator = "add"
                displayValue.textContent = ""
            }
        } else {
            if(displayValue.textContent === "0"){ //the calculator's display will start at 0
                displayValue.textContent = number.value; //then it will become whatever number is clicked
            } else {
                displayValue.textContent += number.value; //afterwards it will join other numbers behind it
                console.log(displayValue.textContent)
            }
        }
    });
});

// keyboard support for entering numbers and backspace function
window.addEventListener("keydown", function(e){
    if(e.key <= 9){
        if(displayValue.textContent === "0"){ //the calculator's display will start at 0
            displayValue.textContent = e.key; //then it will become whatever number is clicked
        } else {
            displayValue.textContent += e.key; //afterwards it will join other numbers behind it
        }
    } else if(e.key === "Backspace") {
        displayValue.textContent = 0
    } else if(e.key === "Enter"){
        displayValue.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum))
    }
})

//enter first number into calc
//clear the display when the operator button is clicked
//enter second number
//then click equal
//will show the results