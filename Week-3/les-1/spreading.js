const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

// Reden om te spreaden?

// 1. kopie maken van een referentie datatype.

const students = ["Mert", "Yens"];
const friends = students;

students.push("Farah");

//const people = [students];

const people = [...students]; // nieuwe array referentie kapot

students.push("Milana");

// 2. arrays samen te voegen

const drinks = ["Pintje", "Gin", "Mocktail"];

const snacks = ["Frikandel", "Chipjes"];

const menu = [...drinks, "Cola", ...snacks];

// Dit werkt ook allemaal met objecten

const car = {
    brand: "Citroen",
    model: "C8",
    year: 2021
}

const upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom Uitlaat"]
}

// car.upgrade = upgrade;

/* const car = {
    brand: "Citroen",
    model: "C8",
    year: 2021,
    upgrade: {
        spoiler: true,
        extra:["GPS", "Custom Uitlaat"] 
        }
} */

const upgradedCar = {
    ...car,
    ...upgrade
}

// console.log(upgradedCar)

// 3. Wanneer een methode geen arrays aanvaard:

Math.max(3, 5, 7, 2);
Math.max(...numbers);

// Object keys advanced syntax 
const a ='Hello'

const obj = {
    a
}

// a: a eerste is een key tweede is variable
// a = "hello"
// korte schrijfwijze: a

console.log(obj);