//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  function doubleChar(str) {
    let word = '';
    for (let i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
  };

  function doubleChar(str){
    return str.split('').map(function(s){
        return s+s;
     }).join('');
   
  }
  
  