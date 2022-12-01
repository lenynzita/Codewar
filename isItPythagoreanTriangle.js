// Write a code that will tell if the function is a pythagorean Triangle theorem.
// const[a,b,c] = a**2+ b**2 == c**2
// return True or False

function isPythagoreamTriangle(nums){
    const [a,b,c] = nums.sort((a,b)=> a-b)// .sort will sort the variable starting by a, b than c.
    return a**2 + b**2 ===c**2
}

function isPythagoreanTriple(i) {
    var [a, b, c] = i.sort((a, b) => a - b)
    
    return (a*a + b*b) === c*c
    }