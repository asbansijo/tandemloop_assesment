const input = prompt("Enter a positive integer:");
const a = parseInt(input);

if (isNaN(a) || a <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1); 
  }

  console.log("Output:", result.join(", "));
}
