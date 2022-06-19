import './styles.css';
import {clearAll} from "./functions/clearAll";
import calculating from "./functions/calculating";
import equalsButtonFunction from "./functions/addEventListeners/equalsButtonFunction";

const currentOperations = document.querySelector(".current-operation");
const previousOperations = document.querySelector(".previous-operation");
const digitButtons = document.querySelectorAll(".number-button");
const operandButtons = document.querySelectorAll(".operation-button");
const deleteButton = document.querySelector(".delete-button");
const allClearButton = document.querySelector(".all-clear-button");
const equalsButton = document.querySelector(".equals-button");


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
    button.classList.add("digitButton");
    button.addEventListener( 'click', (event) =>{
        if(previousOperations.innerText.slice(-1)==='='){
           previousOperations.innerText = currentOperations.innerText + button.innerText;
           currentOperations.innerText = '';
        }
        if(isNaN(currentOperations.innerText.slice(-1)) ||
           currentOperations.innerText.slice(-1)==='.' ||
           currentOperations.innerText==='') {
            return;
        }
        else {
            if(isNaN(previousOperations.innerText.slice(-1))){
                let OperationHelper = previousOperations.innerText + currentOperations.innerText;
                previousOperations.innerText= calculating(OperationHelper);
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


equalsButton.addEventListener('click',equalsButtonFunction);

