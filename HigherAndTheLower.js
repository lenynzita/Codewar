/**Write a code that will return the highest and the lowest number. */

function highAndLow(numbers) {
    numbers = numbers.split(" "); // We split the numbers separately so that we ccan select from there
    return Math.max.apply(null,numbers) + " " + Math.min.apply(null, numbers); //Math.max: select the highest numbers and 
    //Math.min: select the lowest number
}