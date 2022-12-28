// Define String.prototype.toAlternatingCase 
// (or a similar function/method such as
//  to_alternating_case/toAlternatingCase/ToAlternatingCase
//   in your selected language; 
//  see the initial solution for details) such that each 
// lowercase letter becomes uppercase and each 
// uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    new_str = ""; // create a new string
    for(var i = 0; i < this.length; i++) {  //for loop to loop to the variable
      if(this[i] === this[i].toUpperCase()) { // set the first and the second one equal to each others and convert it to upperCase
        new_str += this[i].toLowerCase(); // the new one to lower case
      }
      else {
        new_str += this[i].toUpperCase(); // or upper case since they are wqual to each other
      }
    }
    return new_str; //than we return a new variable.
  }