function squareSum(numbers){
    let sum = 0  //we have to create a variable
      for( let i = 0; i < numbers.length; i++) {
          sum += numbers[i] **2 // after creating a for loop, we going to take any number inside that loop then square it by 2 (**2) 
          //than add it to 0 that is the value of the sum
      }
      return sum
  }
//   Example:
//   for [1, 2, 2] it should return 9 bcz 1^2 + 2^2 + 2^2 = 9