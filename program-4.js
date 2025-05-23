function countMultiples(arr) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    for (let num of arr) {
        for (let i = 1; i <= 9; i++) {
            if (num % i === 0) {
                result[i]++;
            }
        }
    }

    return result;
}

const input = prompt("Enter a list of numbers separated by commas:");

const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

const output = countMultiples(numbers);
console.log("Output:", output);
