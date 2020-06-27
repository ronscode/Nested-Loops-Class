/* Problem: Numbers from N down to 1
•Write a function to print the numbers from N down to 1 • Receives a number n
• Prints the numbers from n down to 1 */


function numbersFromNto1(n) {
  let result = '';
  for (let i = n; i >= 1; i--) {
     if (i < n)
    result += ", ";
    result += i; 
  }
console.log(result);
}

numbersFromNto1(10);