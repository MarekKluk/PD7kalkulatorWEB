import findingOperandForMultipleComputation from "./findingOperandForMultipleComputation";

export default function calculating(thingToCalculate){
    let arr=thingToCalculate.split("");
    let searchedOperand = findingOperandForMultipleComputation (arr);
    let operandPosition = thingToCalculate.indexOf(searchedOperand, 1);
    let firstOperand = thingToCalculate.slice(0,operandPosition);
    let secondOperand = thingToCalculate.slice(operandPosition+1,arr.length);
    if(searchedOperand === '*'){
        return firstOperand*secondOperand;
    }
    else if(searchedOperand === '/') {
        return firstOperand/secondOperand;
    }
    else if(searchedOperand ==='+') {
        return Number(firstOperand)+Number(secondOperand);
    }
    else if(searchedOperand === '-') {
        return firstOperand-secondOperand
    }

}