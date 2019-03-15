// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // Remove all the values
    // use arguments object to contain all arguments passed to function
    let myArgs = [];
    // loop over arguments object starting from index 1, 0 being the arr
    for(let i = 1; i < arguments.length; i++) {
        myArgs.push(arguments[i]);
    }
    // console.log(myArgs);
    // console.log(arguments);
    // filter array using indexOf myArgs
     return arr.filter( element => 
        myArgs.indexOf(element) < 0
    );
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);