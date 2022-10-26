/**We are creating a function to get the first element(s) of a sequence.
 * Passing a parameter (default=1) will return the first n element(s) of the sequence.
 * if n == 0 return an empty sequence[]
 */

//we create a function with 2 parameters.
function first(arr, n) {
    let result = [] //have an empty array where we going to push the elements
    
    if( n === undefined){ // if n is undefined, we are returning an empty arr=0.
     result.push(arr[0])
    }else{  //else we create a for loop to push the rest of the array
      for(let i =  0 ; i < n ; i++ ){
       result.push(arr[i])
    }
    }
  
   
   return result  //return the result.
 }
 // Ex:
 // let arr = ['a','b','c','d','e'];
 // first (arr) => ['a']
 // first (arr, 2)=> ['a','b']...