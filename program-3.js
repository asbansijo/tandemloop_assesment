const x = parseInt(prompt("Enter a integer:"));

for (let i = 1; i <= x; i++) {
  let count = (i % 2 === 0) ? i - 1 : i;

  let oddNumber = 1;
  let line = [];

  for (let j = 0; j < count; j++) {
    line.push(oddNumber);
    oddNumber += 2;
  }

  console.log(line.join(" "));
}
