function squareDigits(num){
    return +Array.from(num.toString(), v => v * v).join('');
}
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }