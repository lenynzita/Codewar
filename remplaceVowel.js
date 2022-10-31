/**Write a code that removed wovel on the string */
function shortcut(string) {
  return string.replace(/[aeiou]/gi, ""); //
}

//It's regular expression. 
//"[aeiou]" tells the replace function to look for any of these characters and "gi" are flags that tells 
//the function to look for match over the entire string (will otherwise break at the first match), 
//this is the "g" flag. And the "i" flag tells it to match case insensitively. So, it would also match, A , E and so on.
