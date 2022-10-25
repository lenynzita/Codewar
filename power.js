function numberToPower(number, power){
    let total = 1;  // we determinate a variable that will be equal to 1 
    for (let i = 1; i <= power; i++) { 
      total = total * number;
    } // we creating a for loop to include all the numbers
      // total is the variable that will be power on to the number
    return total;  // we return the result.
  }