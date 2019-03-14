// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr, a, b) {
  // Add your code below this line
  let arr2 = [];
    return arr.concat(arr2).sort(a, b => {
        a -b;
    });
    
  // Add your code above this line
}
nonMutatingSort(globalArray);