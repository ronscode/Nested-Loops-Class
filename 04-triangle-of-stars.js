/* Problem: Triangle of Stars
• Write a function to print a triangle of stars like shown below: • Receives the size of a triangle from the console
• Prints a triangle of stars
  */


function starsTriangle(size) {
  for (let row = 1; row <= size; row++) {
  let stars = '';
  for (let col = 1; col <= row; col++) {
        stars += "*";
      }
      console.log(stars);
    }
  }

  starsTriangle(5);