// suppose the array is in sorted order, 
// then the binary search can perform instead of linear search to increase the performance

// start is 0, end is array last value, middle is the value present in middle, suppose the length of array
// is even, middle has 2 values, so always take first value as middle.
// if the given value is greater than middle, then move the start to middle or move the end to middle if
// the value is less than middle and continue till the value is in middle index

function BinarySearch(arr, value){
  let start = 0;
  let end = arr.length - 1;
  let middle = findMiddle(start,end);
  while (arr[middle] !== value && start != end) {
    if(arr[middle] > value){
      end = middle - 1
    }else{
      start = middle + 1
    }
    middle = findMiddle(start,end);
  }
  return arr[middle] === value ? middle : -1
}

function findMiddle(start,end){
  return Math.floor(start + end) / 2
}

console.log(BinarySearch([2,3,4,5,7,8,9], 4))

// Step 1:

// [2,   3,   4,   5,   7,   8,   9]
//  S              M              E

// Step 2:

// [2,   3,   4,   5,   7,   8,   9]
//  S    M    E             

// Step 3:
// [2,   3,   4,   5,   7,   8,   9]
//           SME            

// S - start, M - middle, E - end

//N - 7, STEPS - 3 so, log 7 = almost 3 => O(LOG N) 

// Best Case Scenario - O(1), Worst Case Scenario - O(LOG N)

