/**Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. */

function paperwork(n, m) {
    if (n<0 || m<0) {
       return 0;
      }
      else {
          return n*m;
      }
 }
 
//  example:
//  n= 5, m=5: 25
//  n=-5, m=5: 0
 
//  If there is not students, the will not be any copies to do.