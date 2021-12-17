
// Function which accepts two parameters - array and value and should return the 
// index of the value in array if the given value is present.
// otherwise return -1

//arr - array of numbers/integers, value - value to target in array.
function linearSearch(arr, value){
  for(let i=0; i<arr.length;i++){
    if(arr[i] === value){
      return i // return the index of the array if value is present
    }
  }
  return -1 // if the value is not present in the array.
}

console.log(linearSearch([3,4,5,2,7,8,9], 10))
// Best Case Performance - O(1), Worst Case Performance - O(N)
