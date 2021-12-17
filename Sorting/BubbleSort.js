const { swap } = require('../Util/common')

// Bubble Sort compares the two values in seqence and swaps it if the right value is lesser than left.
//The process will continue till all the values in array is in sorted ondragover.

function bubbleSort(arr){
  let noSwaps; // To prevent the unnessary loops after sorted array. So to acheive O(1) for almost sorted array
  for(let i=arr.length; i>0; i--){
    noSwaps = true
    for(let j=0; j<i-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr,j,j+1)
        noSwaps = false
      }
    }
    if(noSwaps) break
  }
  return arr
}

console.log(bubbleSort([3,20,73,-9,56,76,4,7,1])) //O(n^2)
