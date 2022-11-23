//Complete the function to find the count of the most frequent item of an array. 
//You can assume that input is an array of integers. 
//For an empty array return 0

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0; //if there is nothing inside the array, the result will be 0.
    
    var count = Object.create(null);
    
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });
    
    return Math.max(...Object.values(count));
  }