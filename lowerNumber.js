// how to find the sum of an array except the higher and the lower number
function lowerNumber(){
    
if(array && array.length > 1) {
    const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
    return sortedArray.reduce((acc, cur) => acc + cur, 0)
}
return 0
}
// ex: {6, 2, 1, 8, 10} => 16 (2+6+8= 16)
//  {1, 1, 11, 2, 3 } => 6 (1+2+3=6)