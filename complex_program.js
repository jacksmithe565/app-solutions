/* complex_program.js */

// This code implements a complex program that performs multiple mathematical operations on a given input number

// Function to calculate the factorial of a number
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let fib = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to add two complex numbers
  add(other) {
    let realSum = this.real + other.real;
    let imaginarySum = this.imaginary + other.imaginary;
    return new ComplexNumber(realSum, imaginarySum);
  }

  // Method to multiply two complex numbers
  multiply(other) {
    let realProduct = this.real * other.real - this.imaginary * other.imaginary;
    let imaginaryProduct = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(realProduct, imaginaryProduct);
  }
}

// Test the implemented functions and classes
let inputNumber = 5;

console.log(`Factorial of ${inputNumber}: ${factorial(inputNumber)}`);
console.log(`Is ${inputNumber} prime? ${isPrime(inputNumber)}`);
console.log(`Fibonacci number at position ${inputNumber}: ${fibonacci(inputNumber)}`);

let complex1 = new ComplexNumber(3, 2);
let complex2 = new ComplexNumber(-1, 4);
let complexSum = complex1.add(complex2);
let complexProduct = complex1.multiply(complex2);

console.log(`Sum of complex numbers: ${complexSum.real} + ${complexSum.imaginary}i`);
console.log(`Product of complex numbers: ${complexProduct.real} + ${complexProduct.imaginary}i`);