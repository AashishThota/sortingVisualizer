
   function applyHeapSort(x)
   {
        var size=x;
        var inputArray = Array.from({length: size}, () => Math.floor(Math.random() * 40));
        

        
        function maxHeap(input, i) {
            const left = 2 * i + 1
            const right = 2 * i + 2
            let max = i
        
            if (left < arrLength && input[left] > input[max]) {
                max = left
            }
        
            if (right < arrLength && input[right] > input[max])     {
                max = right
            }
        
            if (max != i) {
                swap(input, i, max)
                maxHeap(input, max)
            }
        }
        
        function swap(input, indexA, indexB) {
            const temp = input[indexA]
        
            input[indexA] = input[indexB]
            input[indexB] = temp
        }
        
        function heapSort1(input) {   
            arrLength = input.length
        
            for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
                maxHeap(input, i)
              }
        
            for (let i = input.length - 1; i > 0; i--) {
                swap(input, 0, i)
                arrLength--
        
                maxHeap(input, 0)
            }
            return
        }
        
        let arrLength
        heapSort1(inputArray)
        console.log(inputArray)
        
    }  

    applyHeapSort(document.currentScript.getAttribute('size'))
   

export default applyHeapSort

