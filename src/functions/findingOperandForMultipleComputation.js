export default function findingOperandForMultipleComputation (arr){
    for(let i=0 ; i<=arr.length ; i++) {
        if(arr[i] === '*'){
            return arr[i];
        }
        else if(arr[i] === '/') {
            return arr[i];
        }
        else if(arr[i] === '+') {
            return arr[i];
        }
        else if(arr[i] === '-' && i!==0) {
            return arr[i];
        }
    }
}
