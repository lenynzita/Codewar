// write a code that multiplying a given number by eight if it is an even number and by nine otherwise javascript

function simpleMultiplication(n) {  // Function         
    if (n % 2 === 0) { //we create a IF statement for the condition that the number by 2 bcz 2 it is an even number
     return n * 8; // we should return that number multiple (*) by 8
     }  else  { // otherwise that number should by multiply by 9
         return n * 9;
     }
 }