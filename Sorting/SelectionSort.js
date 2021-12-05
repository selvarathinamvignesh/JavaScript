const { swap } = require('../Util/common')

function SelectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let lowest = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest) swap(arr, i, lowest) // checking i is not the lowest to prevent additional swapping.
  }
  return arr
}

console.log(SelectionSort([66,3,0,2,41,82,-9,4,21])) //O(n^2) having less swaps compared to bubble sort.
