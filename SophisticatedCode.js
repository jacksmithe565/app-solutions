/*
  File Name: SophisticatedCode.js
  Description: This code implements a complex algorithm to search for prime numbers up to a given limit.
*/

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) return false;
  }
  
  return true;
}

// Function to generate prime numbers up to a limit
function generatePrimes(limit) {
  const primes = [];
  
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Example usage
const limit = 1000;
const primeNumbers = generatePrimes(limit);

console.log(`Prime numbers up to ${limit}:`);
console.log(primeNumbers);