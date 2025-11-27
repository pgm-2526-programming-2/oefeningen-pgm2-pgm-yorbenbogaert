const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"];

const favoriteGames = [{
    name: "Super Mario Bros",
    releaseYear: 1980,
},{
    name: "Zelda",
    releaseYear: 1984,  
}
]

const allGames = new Array();

Array.isArray(games); //true 

const secondGame = games[1];
const altGame = games.at(1);
const lastGame = games.at(-1);

const values = [
    "Adriaan",
    function() {
        console.log("Hello")
    }
]

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;
//console.log(games)


const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);
//stringArray.push(5); dit kan niet 
numbers.push(5);

const numbersString = JSON.stringify(numbers)
console.log(stringArray, numbers, numbersString);

const students = ["Nick", "Mert", "Yens"];

const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";

const friend = "Adriaan";

console.log(teacher === friend); //true
console.log(students === people); //false

function areArraysEqual(one, two) {
    const studentsString = JSON.stringify(one)
    const peopleString = JSON.stringify(two)
    if (studentsString === peopleString)
        return 'yes'
    else 
        return 'no'
};

areArraysEqual();
console.log(areArraysEqual(students, people));

function areArraysEqual2(arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length){
        return false;
    }
    
    return JSON.stringify(arrOne) === JSON.stringify(arrTwo)

}
console.log(areArraysEqual2(students, people))

const martix = [ //shift alt pijltje is text kopieren naar boven of bended en alt pijltje is text naar boven of beneden verplaatsen
    ['0', '0', '0', '0']
    ['0', 'x', '0', '0']
    ['0', '0', '0', '0']
    ['0', '0', '0', '0']
]

martix[1],[1]; 

//for (const element of object) {
    
//}

console.log('Numbers', numbers)

const doubleNumbers = numbers.map((value, index) => {
    if(value === 2){
        return value
    }
    
    return value * 2;
});

console.log('Double Number: ', doubleNumbers);

console.log('Double numbers as string', doubleNumbers.join(', '));

const numbersWithoutEight = doubleNumbers.filter((value) => {

    return value !== 8;
});

console.log(numbersWithoutEight);

numbers.some((number) =>{
    return number === 8; 
});

numbers.every((number) =>{
    return number === 8;
});

//reduce -> Minder maken

// Van een array naar 1 getal te gaan (Meestal een som/optelling)

const sales = [4, 10, 6,]

const totalSales = sales.reduce((prevValue, currentValue) =>{
    return prevValue + currentValue;
});

console.log(totalSales)

// loop 1: 0 + 4 return = 4
//loop 2: 4 + 10 return = 14
//loop 3: 14 + 6 return = 20

const products = [
    { name: "Shirt", price: 20},
    { name: "Shoes", price: 50},
    { name: "Hat", price: 15}
]

const totalProductsPrice = products.reduce((prevReturnedPrice, productObject ) =>{

    return prevReturnedPrice + productObject.price;
}, 0);

console.log(totalProductsPrice)