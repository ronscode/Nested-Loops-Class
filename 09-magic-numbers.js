/* Problem: Magic Numbers
•Write a function to find all 3-digit magic numbers of order n
• A number is magic of order n if the product of its digits is n */

function magicNumbers(n) {
  for (let d1 = 1; d1 <= n; d1++) {
    for (let d2 = 0; d2 <= n; d2++) {
      for (let d3 = 0; d3 <= 9; d3++) {
        if (d1 * d2 * d3 === n) {
          console.log(`${d1} ${d2} ${d3}`)
        }
      }
    }
  
  }

}

magicNumbers(50); 
magicNumbers(7);    