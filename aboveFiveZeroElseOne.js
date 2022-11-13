//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'.
// Return the resulting string.
 function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1" //newStr += "1"bcz newStr is empty. Meaning the result will be 0+1=1
      }
      else{
        newStr += "0"; //Meaning the result will be 0+0=0
      }
    }
    return newStr;
  }