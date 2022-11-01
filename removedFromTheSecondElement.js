// How to revome every second element from the array. Keep the first element and start removing from the second

function removeEveryOther(arr){
    for (let i = 1; i < arr.length; i++){
             arr.splice(i,1);
       }
       return arr;
    }
    // Ex:
    // ["Keep",  "Remove", "Keep", "Revove", "keep", ...]
    // ["Keep", "Keep", "Keep", ...]