/* 
   Filename: sophisticatedCode.js
   Content: Complex and Elaborate JavaScript Code
*/

// Declarations
const PI = 3.14159;
let radius = 5;
let volume = 0;

// Function to calculate the volume of a sphere
function calculateVolume() {
  volume = (4 / 3) * PI * Math.pow(radius, 3);
}

// Function to display the volume of a sphere
function displayVolume() {
  console.log("The volume of the sphere is " + volume.toFixed(2) + " cubic units.");
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Function to generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Complex logic to find the sum of all prime Fibonacci numbers less than or equal to a given number
function sumPrimeFibonacci(limit) {
  let sum = 0;

  for (let i = 1; ; i++) {
    const fibonacciNumber = fibonacci(i);

    if (fibonacciNumber > limit) {
      break;
    }

    if (isPrime(fibonacciNumber)) {
      sum += fibonacciNumber;
    }
  }

  return sum;
}

// Main function to execute the program
function main() {
  calculateVolume();
  displayVolume();

  console.log("Factorial of 5: " + factorial(5));

  console.log("Is 17 a prime number? " + isPrime(17));
  console.log("Is 24 a prime number? " + isPrime(24));

  console.log("10th Fibonacci number: " + fibonacci(10));
  console.log("15th Fibonacci number: " + fibonacci(15));

  console.log("Generated password: " + generatePassword(12));

  console.log("Sum of prime Fibonacci numbers less than or equal to 100: " + sumPrimeFibonacci(100));
}

// Execute the main function
main();