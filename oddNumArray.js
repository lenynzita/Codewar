//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(numbers) {
    let count = 0; //create a variable =0. Starting value
    for(let i = 0; i<numbers.length; i++){
      for(let j = 0; j<numbers.length; j++){
        if(numbers[i] == numbers[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return numbers[i];
      }
    }
  }