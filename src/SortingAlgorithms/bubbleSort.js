// ToDo: Change this portion to take in inputs from react front end
var size = prompt('Enter the array size');
var inputArray = [];

for(var i = 0; i<size; i++){
    inputArray[i] = prompt('Enter the element ' + (i+1));
}

// main logic of bubble sort
function bubbleSort(inputArray){
    if(inputArray.length <= 1) return inputArray;
    let isSorted = false;
    let counter  = 0;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < inputArray.length-1-counter; i++){
            if(inputArray[i] > inputArray[i+1]){
                swap(i, i+1, inputArray);
                isSorted = false;
            }
        }
        counter++;
    }

    console.log(`Sorted array is ${inputArray}`);
    return inputArray;

}

function swap(i, j, inputArray){
    const temp = inputArray[j];
    inputArray[j] = inputArray[i];
    inputArray[i] = temp;
}

bubbleSort(inputArray);