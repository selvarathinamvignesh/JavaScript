// function accept two strings
// check how many times the 2nd string is present as substring in 1st string value.
// return count if any otherwise 0.

function Naive(longStr, shortStr){
  let count = 0
  for(let i=0; i< longStr.length;i++){
    for(let j=0; j< shortStr.length;j++){
      if(shortStr[j] !== longStr[i+j]){
        break;
      }
      if(j === shortStr.length-1) {
        count++
      }
    }
  }
  return count
}

console.log(Naive("wowomgwomg", "wowf")) //O(n^2)
