/* Problem: Triangle of Stars with While
• Write a function to print a triangle of stars like shown below: • Receives the height of a triangle from the console
• Prints a triangle of stars using while loops
  */

 function starsTriangle(height) {
  let row = 1;
  while (row <= height) {
    let stars = '';
    let col = 0;
    while (col++ < row)
      stars += '*';
    console.log(stars);
    row++;
} }

starsTriangle(5);