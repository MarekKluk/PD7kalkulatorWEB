import './styles.css';

const currentOperations = document.querySelector(".current-operation");
const previousOperations = document.querySelector(".previous-operation");
const digitButtons = document.querySelectorAll(".number-button");
const operandButtons = document.querySelectorAll(".operation-button");
const deleteButton = document.querySelector(".delete-button");
const allClearButton = document.querySelector(".all-clear-button");
const equalsButton = document.querySelector(".equals-button");

function clearAll (){
    currentOperations.innerText = '';
    previousOperations.innerText = '';
}

function findingOperandForMultipleComputation (arr){
    let searchedPosition = null;
    for(let i of arr) {
        if(i === '*'){
            return searchedPosition = i;
        } else if(i === '/') {
            return searchedPosition = i;
        } else if(i === '+') {
            return searchedPosition = i;
        } else if(i === '-'){
            return searchedPosition = i;
        }
    }
}

digitButtons.forEach( button =>{
    button.addEventListener( 'click', (event) =>{
        if(previousOperations.innerText.slice(-1)==='='){
            clearAll();
        }
        if (currentOperations.innerText.slice(-1)!=='.' || button.innerText !== '.') {
            currentOperations.append(button.innerText);
        }
    })
});

operandButtons.forEach( button =>{
    button.addEventListener( 'click', (event) =>{
        if(previousOperations.innerText.slice(-1)==='='){
           previousOperations.innerText = currentOperations.innerText
            currentOperations.append(button.innerText);
        }
        if(isNaN(currentOperations.innerText.slice(-1)) ||
           currentOperations.innerText.slice(-1)==='.' ||
           currentOperations.innerText==='') {
            return;
        }
        else {
            if(isNaN(previousOperations.innerText.slice(-1))){
                previousOperations.innerText = (eval(previousOperations.innerText+ currentOperations.innerText));
                previousOperations.append(button.innerText);
                currentOperations.innerText = '';
            }
            else {
                previousOperations.append(currentOperations.innerText);
                previousOperations.append(button.innerText);
                currentOperations.innerText = '';
            }
        }
    });
});

allClearButton.addEventListener('click', (event) => {
    clearAll();
});

deleteButton.addEventListener('click', (event) => {
    let string = currentOperations.innerText.toString();
    currentOperations.innerText = string.slice(0, -1);
});

equalsButton.addEventListener('click', (event) => {
        if(previousOperations.innerText.slice(-1)==='='){
            let previousOperationsToString = previousOperations.innerText.toString();
            let previousOperationsArr = previousOperationsToString.split("");
            let searchedOperand = findingOperandForMultipleComputation(previousOperationsArr);
            let operandPosition = previousOperationsToString.indexOf(searchedOperand);
            previousOperations.innerText = previousOperationsToString.slice(operandPosition,-1);
            previousOperations.prepend(currentOperations.innerText);
            currentOperations.innerText = eval(previousOperations.innerText);
            previousOperations.append('=');
        }
        else {
            previousOperations.append(currentOperations.innerText);
            currentOperations.innerText = eval(previousOperations.innerText);
            previousOperations.append('=');
        }
});
