//Complete the function that takes a 
//non-negative integer n as input, 
//and returns a list of all the powers
// of 2 with the exponent ranging 
//from 0 to n ( inclusive ).

function powersOfTwo(n){ 
    let myArray = []; // we create an array where we going to push our return in.
    for (let i=0; i<=n; i++){
      myArray.push(2**i);
    }
    return myArray
  }