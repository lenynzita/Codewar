// return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) { // if the input is equal to null or negative, return an empty array.
          return [];
      }
      let array = [0, 0]; //where we going to return the values
  
      for(let i = 0; i < input.length; i++) { //for loop
          if(input[i] <= 0) { //if the numbers are less or equal to 0, sum of the array
              array[1] += input[i];
        } else {       // else, count the number of the array
              array[0] += 1;
        }
      }
      return array;
  }
//   EXAMPLES
//   For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].