// Print the list of choices in the console
console.log("Product Price List:");
console.log("A. Pepsi Cola - Php 30.00");
console.log("B. Coca Cola - Php 35.00");
console.log("C. Apple (per kg) - Php 100.00");
console.log("D. Orange (per kg) - Php 120.00");
console.log("E. Hotdogs (per kg) - Php 180.00");

// Ask the user to enter a choice
let choice = prompt("Enter your choice (A, B, C, D, or E):");

// Convert input to uppercase for consistency
choice = choice.toUpperCase();

// Use switch statement to determine the price
switch (choice) {
  case "A":
    alert("Pepsi Cola - Php 30.00");
    break;
  case "B":
    alert("Coca Cola - Php 35.00");
    break;
  case "C":
    alert("Apple (per kg) - Php 100.00");
    break;
  case "D":
    alert("Orange (per kg) - Php 120.00");
    break;
  case "E":
    alert("Hotdogs (per kg) - Php 180.00");
    break;
  default:
    alert("Invalid choice. Please select A, B, C, D, or E.");
}
