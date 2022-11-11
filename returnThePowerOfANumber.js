/**You are given an array with positive numbers and a non-negative number N.
 * You should find the N-th power of the element in the array with the index N.
 * If N is outside of the array, then return -1. 
 * Don't forget that the first element has the index 0. */
function index(array, n){
    var p = array.length; //p is equal to the of length of the array
    if(n < p){ //we have the if statement
        for(i=0; i<p; i++){  //i is equal to n
        if(n == i){
          return Math.pow(array[i], n); //we return the power of the index of the array by the number n.
        }
      }
    }else{
      return -1; //if the number is outside the array, it is going to return -1.
    }
    
  }

  /** Ex:   array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
            array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
 */