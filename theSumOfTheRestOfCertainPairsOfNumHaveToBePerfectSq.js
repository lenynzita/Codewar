function closestPairTonum(n) {
    for (let i= n-1; i> 0 ; i--){  // we have two for loop bcz we need to have to answers, 
      for (let j =i-1; j> 0; j--){
        console.log(i,j)
        let sum = i+j
        let sub = i-j
        if (i !=j && perfectSq(sum) && perfectSq(sub)){
          return [i,j];
        }
      }
    }
  }

  // We create a function to check if it a whole number 
  
  function isWhole(n){
    let i = parseInt(n); //we create a variable i parseInt(n): return the whole number
    if (i === n){
      return true
    }else{
      return false
    }
  }
  
  // This function is to check if the sq root of the number and it will return true if it is a whle number

  function perfectSq(m){
    const root = Math.sqrt(m);
      if (isWhole(root)){
        return true 
      }else{
        return false
      }
  }
  