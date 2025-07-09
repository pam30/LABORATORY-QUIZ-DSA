// Ask the user for the dog breed and number of times to print
let dog_breed = prompt("Enter the dog breed:");
let print_count = prompt("How many times do you want to print the dog breed?");

// Convert print_count to a number
print_count = parseInt(print_count);

// Loop to print the dog breed
for (let i = 0; i < print_count; i++) {
  console.log(dog_breed);
}
