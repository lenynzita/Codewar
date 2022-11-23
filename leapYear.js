// Write a code that show other the year is a leap year or not. Here are the rules:
// years divisible by 4 and 400 are leap years but  years divisible by 100 are not leap years.


function isLeapYear(year){
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
function isLeapYear(year){
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)
    return true 
    else
    return false
}