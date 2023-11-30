/* 
   Filename: ComplexProgram.js
   Content: A complex program demonstrating various features of JavaScript
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Function to find the sum of all even numbers from 1 to a given number
function sumOfEvenNumbers(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Function to generate random passwords
function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Recursive function to calculate factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array of fruits
const fruits = ['apple', 'banana', 'orange', 'mango'];

// Print each fruit using Array.forEach method
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Calculate the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

// Create an instance of Person class
const person = new Person('John Doe', 25);

// Display person's greeting
console.log(person.getGreeting());

// Use the sumOfEvenNumbers function to find the sum of even numbers from 1 to 50
const evenNumbersSum = sumOfEvenNumbers(50);
console.log(`Sum of even numbers from 1 to 50: ${evenNumbersSum}`);

// Generate a random password of length 8
const password = generatePassword(8);
console.log(`Generated Password: ${password}`);

// Calculate the factorial of 5 using the factorial function
const factorialOf5 = factorial(5);
console.log(`Factorial of 5: ${factorialOf5}`); 

// More code...

// ...Keep adding more elaborate and complex code here...

// End of complex program