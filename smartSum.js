// the methood arguments call recursive. Recursive function is the one that call himself 
// Need to review.
//[1,2,[2,3]],3 this is a list of 2 things. It is going to break the first array (1+2) than break the second one (2+3)
// than add it to 3 which equal to 11.

function smartSum(){
    let sum = 0;
    for(let i=0; i < arguments.length; i++){
      console.log(arguments[i]);
      if( Number.isFinite(arguments[i])){
        sum += arguments[i];
      }else{
        sum += smartSum(...arguments[i]);
      }
    }
    console.log("returning", sum);
    return sum;
  }