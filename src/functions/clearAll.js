const currentOperations = document.querySelector(".current-operation");
const previousOperations = document.querySelector(".previous-operation");

export function clearAll (){
    currentOperations.innerText = '';
    previousOperations.innerText = '';
}