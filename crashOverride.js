function aliasGen(f,s){
    console.log(f,s)
    let firstChar = f.charAt(0); // To target the first character of the variable
    let surChar = s.charAt(0);
    firstChar = firstChar.toUpperCase(); // convert to the upper case
    surChar = surChar.toUpperCase();
    console.log (firstChar, surChar);
    if (firstChar < "A" || firstChar >"Z"|| surChar < "A" ||surChar > "Z"){ // any character between "A" - "Z"
      return "Your name must start with a letter from A - Z."
    }
    return firstName[firstChar]+ " " + surname[surChar]; // the result.
  }