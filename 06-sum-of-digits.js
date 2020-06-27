/* Problem: Sum of Digits Calculator
• Continuously read numbers until "End" is entered • Print the sum of digits for each number
• Finally, print "Goodbye"
  */

 function sumOfDigits(inputLines) {
  while (true) {
    let input = inputLines.shift();
    if (input === "End") break;
    let sum = 0;
    for (let num = Number(input);
      num > 0; num = Math.floor(num / 10))
      sum += num % 10;
    console.log(`Sum of digits: ${sum}`);
}
  console.log("Goodbye");
}


sumOfDigits([157, 99, 5, 438, 'End'] );