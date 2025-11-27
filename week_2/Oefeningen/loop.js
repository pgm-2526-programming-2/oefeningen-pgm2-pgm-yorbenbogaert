const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number)
}

const string = 'Hello'
for (const letter of string) {
    console.log(letter)
}

const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`);
});
