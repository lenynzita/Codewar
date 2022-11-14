// Write a function that takes a string and return a new string with all vowels removed. Y isnt included

function disemvowel(str) {
    return str.match(/[^aeiou]/gi).join('');  // /[^aeiuo]/gi removed vowels.
    }
   