function getAverage(marks){
    // calculates total number of marks
    let total = 0;
    for(let i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }