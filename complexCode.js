/* 
Filename: complexCode.js
Content: Complex code for a web application that calculates the Fibonacci sequence up to a given number and displays the result in an HTML table.
*/

// Function to calculate the Fibonacci sequence up to a given number
function calculateFibonacciSequence(limit) {
  if (typeof limit !== "number") {
    return "Invalid input. Please provide a number.";
  }

  let fibonacciSequence = [0, 1];

  for (let i = 2; i <= limit; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }

  return fibonacciSequence;
}

// Function to generate an HTML table with Fibonacci sequence
function generateFibonacciTable(limit) {
  const fibonacciSequence = calculateFibonacciSequence(limit);

  let tableHtml = "<table>";
  tableHtml += "<tr><th>Index</th><th>Fibonacci Number</th></tr>";

  for (let i = 0; i <= limit; i++) {
    tableHtml += `<tr><td>${i}</td><td>${fibonacciSequence[i]}</td></tr>`;
  }

  tableHtml += "</table>";

  return tableHtml;
}

// Function to display the Fibonacci table on the webpage
function displayFibonacciTable(limit) {
  const tableHtml = generateFibonacciTable(limit);
  document.getElementById("fibonacci-table").innerHTML = tableHtml;
}

// Example usage - display Fibonacci table for the first 15 numbers
displayFibonacciTable(15);