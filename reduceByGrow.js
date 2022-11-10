
  const grow = x => {
    let res = 1; //We got a variable that is equal to 1 bcz any number *0 =0
    for (let i = 0; i < x.length; i++) { // create the for loop to multiply all the index in it
      res *= x[i];
    }
    return res;
  };
  
  