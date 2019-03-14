// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    // init empty array
    let range = [];
    // get array of range of numbers
    // use math.min to return lowest value number passed in
    let lower = Math.min(arr[0], arr[1]);
    // math.max to return highest value number passed in
    let upper = Math.max(arr[0], arr[1]);
    // iterate over lower and upper numbers
    for(let i = lower; i <= upper; i++) {
        // push iterated numbers into range array
        range.push(i);
    }
    // reduce range array by adding all
    let total = range.reduce((a, b) => a + b);
    return total;
  }
  
  sumAll([1, 4]);