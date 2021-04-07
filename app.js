
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

const displayValue = document.getElementsByClassName("display-value")[0]
const numberButtons = document.querySelectorAll("input") //selects all the input elements and puts into an array
const storeNumbers = new Array; //creates an array to store numbers that are clicked
const operatorButtons = document.querySelectorAll(".operator") // selects all the elements with class of operator
const equalButton = document.getElementById("equal")

numberButtons.forEach(number => { //loops over the array and for each input value
    number.addEventListener("click", function(e){ //add an event listener of "click" which will run the function
        if(number.value === "."){
            storeNumbers.push(number.value)
            displayValue.innerHTML = storeNumbers.join("")
        } else if(number.value === "<--"){
            alert("im a delete")
        } else if(number.value === "AC"){
            alert("im a clear button")
        } else if (number.value === "="){
            alert("calculating...")
        } else if(number.value === "%"){
            alert("im a % sign")
        }else if (number.className === "operator"){
            if(number.value === "/"){
                operator = "divide"
                alert("im divide")
            } else if (number.value === "-"){
                operator = "subtract"
                alert("im subtract")
            } else if (number.value === "*"){
                operator = "multiply"
                alert("im multiply")
            } else {
                operator = "add"
                alert("im add")
            }
        } else {
            displayValue.textContent = (number.value)
            //storeNumbers.push(number.value) //push the value of the input that was clicked into a new array
            //displayValue.innerHTML = storeNumbers.join(""); //change the innerHTML of the display value with the storeNumbers array but join each value without a space
        }
    });
});

// operatorButtons.forEach(operator => {
//     operator.addEventListener("click", function(e){
//         if(operator.value === "/"){
//             operator = "divide"
//             alert("im divide")
//             displayValue.innerHTML = ""
//         } else if (operator.value === "-"){
//             operator = "subtract"
//             alert("im subtract")
//         } else if (operator.value === "*"){
//             operator = "multiply"
//             alert("im multiply")
//         } else {
//             operator = "add"
//             alert("im add")
//         }
//         storeNumbers.push(number.value)
//         displayValue.innerHTML = storeNumbers.join("")
//     })
// })

// equalButton.addEventListener("click", function(){
//     displayValue.innerHTML = operate(operator, num1, num2)
// })


//enter first number into calc
//clear the display when the operator button is clicked
//enter second number
//then click equal
//will show the results