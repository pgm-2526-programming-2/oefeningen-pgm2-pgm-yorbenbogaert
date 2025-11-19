let firstName = 'Jan';

const age = 20;

const hobbies = ['Gaming', 'Soccer'];

const isStudent = true;

const address = {

    street: 'New York Street',

    number: 4

}

let nickname = firstName;

const interests = hobbies;

nickname = 'GamerBoy';
interests.push('Kitesurfen');

console.log(interests, firstName);

let total = 0; 

function addFiveToNumber(a = 0) {
    total =  a + 5;

    console.log(a + 5)
}

addFiveToNumber(2)

console.log('Totaal:', total)

function doubleNumber(num) {
    num = num * 2
    console.log('Binnen functie: ', num)
}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2
    console.log('Binnen de functie: ', obj.number)
}

let originalNumber = 5
let originalNumberAsReferenceType = {
    number: 5
}

doubleNumber(originalNumber)
doubleNumberWithReference(originalNumberAsReferenceType)
console.log('Original number uit functie', originalNumber)
console.log('Original number uit ref-functie', originalNumberAsReferenceType.number)