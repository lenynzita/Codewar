/**An array of lenght n, starting with the given num X and the sq of the previous number 
 * if N is negative or zero, return an empty array.
 */
function squares(x, n) {
    let num =x;  //we created a variable number = x
    let arr=[];  // empty array where we gonna push the num  inside
    for(let i =0;i<n;i++){ //fro loop array
    arr.push(num); //we push the the num inside the array
    num = Math.pow(num, 2);  //Math.pow returns the value of a base raised to a power.
                            //ex: Math.poe(x,y) = x^y
    }
    return arr;
    
    }