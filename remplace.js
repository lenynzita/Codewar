function alphabetPosition(text) {
    let alphabet ='abcdefghijklmnopqrstuvwxyz'.split(''); //we creating an constant containing 
    //all the alphabetic letters to help us to assign each character to the specific number. 
    //We use the split method to to separate each letter. ('a','b','c')
    
    let alphaNum = [] //we're creating an empty array where we are going to put all the index values.
    
    text = text.toLowerCase (); //we are converting all the character to lower case so that it will be more 
    //efficient
    
    for (let g = 0; g< text.length; g++){
      let idx = alphabet.indexOf(text[g]); // it will find the position of the index inside the variable 'alphabet'
      if (idx === -1){ // when the idx is '-1', it means that the value does not exist. [g] its going to take every single letter inside a text.
        continue; //it is going to comtinue counting.
      } else {
        alphaNum.push(idx + 1);// idx +1 bcz we start counting the index by 0 and we want it to start by 1.
        // .push= we are insering it into the array alphaNum.
      }
    }
    return alphaNum.join(" "); // we are returning everything that inside the array put together.
  }
//worked with Ty.