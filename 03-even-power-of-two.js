/* Problem: Even Powers of 2
•Write a function to print the even powers of 2:
• Receives a number n
• Prints the even powers of 2 up to 2n: • 20, 22, 24, 28, ..., 2n
  */

 function evenPowersOf2(n) {
  let num = 1;
  let result = '';
  for (let i = 0; i <= n; i += 2) {
      if (i > 0)
     result += ", ";
   result += num;
   num = num * 2 * 2;
 }
 console.log(result);
}

evenPowersOf2(10);