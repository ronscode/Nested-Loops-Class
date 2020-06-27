/* The first loop is called the "outer loop" while the second loop is called the "inner loop". 
• The outer loop always executes first
• The inner loop executes inside the outer loop each time the outer loop executes once.  */

// function printGrid(n) {
// for (let row = 1; row <= n; row++) {
//   let result = '';
// for (let col = 1; col <= n; col++) {
//     result += ' *';
//   }
//   console.log(result);
// }
// }

// printGrid(3);

function rowsAndColumns() {
  let rows = 3;
let columns = 2;
for (let r = 1; r <= rows; r++) {
  console.log("row = " + r);
  for (let c = 1; c <= columns; c++)
    console.log("  column = " + c);
}
}

rowsAndColumns();


let arrayOfArrays = [[1,2,3],[4,5,6],[7,8,9]];

// Nested For Loops 

let numOfRows = arrayOfArrays.length;

function makeSomething() {
  for (let i = 0; i < numOfRows; i++) {
    let items = 
  }
}