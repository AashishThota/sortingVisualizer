//  ToDo : Change this portion to take in inputs from react front end
var size = prompt('Enter the array size');
var inputArray = [];

for(var i = 0; i<size; i++){
    inputArray[i] = prompt('Enter the element ' + (i+1));
}

// main logic of merge sort
function mergeSort(inputArray){
    if(inputArray.length <= 1) return inputArray;
    const middle = Math.floor(inputArray.length / 2);
    const leftHalf = inputArray.slice(0, middle);
    const rightHalf = inputArray.slice(middle);
    return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf){
    const sortedArray = new Array(leftHalf.length + rightHalf.length);
    let k = 0;
    let i = 0;
    let j = 0;

    while(i < leftHalf.length && j < rightHalf.length){
        if(leftHalf[i] <= rightHalf[j]) {
            sortedArray[k++] = leftHalf[i++];
        }

        else{
            sortedArray[k++] = rightHalf[j++];
        }
    }

    while(i < leftHalf.length){
        sortedArray[k++] = leftHalf[i++];
    }

    while(j < rightHalf.length){
        sortedArray[k++] = rightHalf[j++];
    }

    console.log(sortedArray);
    return sortedArray;
}

mergeSort(inputArray);