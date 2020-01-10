// ToDo: Change this portion to take in inputs from react front end
var size = prompt('Enter the array size');
var inputArray = [];

for(var i = 0; i<size; i++){
    inputArray[i] = prompt('Enter the element ' + (i+1));
}

// min logic of quick sort
function quickSort(inputArray){
    quickSortHelper(inputArray, 0, inputArray.length-1);
    console.log(`Sorted array is ${inputArray}`);
    return inputArray;
}

function quickSortHelper(inputArray, startIndex, endIndex){
    if(startIndex >= endIndex) return;
    //  make a pivot
    const pivot  = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;

    while(rightIndex >= leftIndex){
        if(inputArray[leftIndex] > inputArray[pivot] && inputArray[rightIndex] < inputArray[pivot]){
            swap(leftIndex, rightIndex, inputArray);
        }
        if(inputArray[leftIndex] <= inputArray[pivot]) leftIndex++;
        if(inputArray[rightIndex] >= inputArray[pivot]) rightIndex--;
    }
    
    swap(pivot,rightIndex, inputArray);

    const leftArraySmaller = rightIndex-1-startIndex < endIndex -(rightIndex+1);
    if(leftArraySmaller){
        quickSortHelper(inputArray, startIndex, rightIndex-1);
        quickSortHelper(inputArray, rightIndex+1, endIndex);
    }

    else{
        quickSortHelper(inputArray, rightIndex+1, endIndex);
        quickSortHelper(inputArray, startIndex, rightIndex-1);
    }
}

function swap(i, j, inputArray){
    let temp = inputArray[j];
    inputArray[j] = inputArray[i];
    inputArray[i] = temp;
}

quickSort(inputArray);