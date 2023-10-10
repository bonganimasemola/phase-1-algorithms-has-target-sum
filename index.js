function hasTargetSum(array, target) {
  
    // Create an empty object to store visited numbers
    const numberMap = {};
  
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      // Calculate the difference between the target and the current number
      const diff = target - array[i];
  
      // If the difference (complement) is in the numberMap, we found a pair
      if (numberMap[diff] !== undefined) {
        return true;
      }
  
      // Otherwise, add the current number to the numberMap
      numberMap[array[i]] = i;
    }
  
    // If we reach this point, no pair was found
    return false;
  }
  

  
  


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  my initial guess is this some kind of if..else block of code 

  the next step would be how do i define (or manipulate two constituents of the array's index adding to === 10 in such a way that if in fact they do === 10 i return true and if != 10 i return false)

  just a guess:  the problem is i'm limiting it to === 10, that's not flexible, what happens when the sum is something else. we've just done .map/.reduce....how do i incorporate those into some kind of loop
  (i=10,i<array.length,i++)
  if (index.map[i] + index.map[i] === 10){
    return true
  } else {
    return false

   
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
