function OddNumbersUpToN(number) {
  if (number < 1 || !Number.isInteger(number)) {
    // Check if the number is not a positive integer
    console.log("Please, enter a positive integer.");
    return;
  }

  let oddNumbers = [];

  for (let i = 1; i <= number; i += 2) {
    oddNumbers.push(i);
  }

  return oddNumbers;
}

// Example:
let result = OddNumbersUpToN(9);
console.log(result); // Output: [1, 3, 5, 7, 9]
