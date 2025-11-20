function sum(a, b) {
    return a + b
}

console.log(sum(2, 8))


const anotherSum = function (a, b) {
    return a + b;
}

anotherSum(10, 5)

// Arrow functions

const arrowSum = (a, b) => {
    return a + b;
}

// Geen currly braces? Return het statement.

const altArrow = (a, b) => a + b;