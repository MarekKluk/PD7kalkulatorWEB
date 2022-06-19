const currentOperations = document.querySelector(".current-operation");
const previousOperations = document.querySelector(".previous-operation");
import findingOperandForMultipleComputation from "../findingOperandForMultipleComputation";
import calculating from "../calculating";

export default function  equalsButtonFunction(){
    if(previousOperations.innerText.slice(-1)==='='){
        let previousOperationsToString = previousOperations.innerText.toString();
        let previousOperationsArr = previousOperationsToString.split("");
        let searchedOperand = findingOperandForMultipleComputation(previousOperationsArr);
        let operandPosition = previousOperationsToString.indexOf(searchedOperand, 1);
        previousOperations.innerText = previousOperationsToString.slice(operandPosition,-1);
        previousOperations.prepend(currentOperations.innerText);
        currentOperations.innerText = calculating(previousOperations.innerText);
        previousOperations.append('=');
    }
    else {
        previousOperations.append(currentOperations.innerText);
        currentOperations.innerText = calculating(previousOperations.innerText);
        previousOperations.append('=');
    }
}