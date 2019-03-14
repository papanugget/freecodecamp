// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    // var newArr = [];
    // Same, same; but different.
    // filter and compare elements of both arrays, push difference to returned array
    return arr1.filter( element => arr2.indexOf(element) <0)
        .concat(arr2.filter( element => arr1.indexOf(element) < 0 )
    );
    // return newArr
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);