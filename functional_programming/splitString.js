// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
    // Add your code below this line

    //replace . , - with whitespace then split words by whitespace
    console.log(str.replace(/[.,-]/g," ").split(" "));
    
    // Add your code above this line
  }
  splitify("Hello World,I-am code");