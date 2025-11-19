function sum(a, b) {
    return a + b;
}

//Oefening: multiply, division.
function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
//Oefening: Maak een functie showCalculation die 3 
//Parameters heeft. 2 getallen, en een van onze functies.
function showCalculation (a, b, callback) {
    console.log(callback(a, b))
}


 showCalculation(2, 1, sum)
 showCalculation(10, 2, multiply)
 showCalculation(10, 2, division)

const name = 'Yorben'
//const division = () => {}
//const multiplier = function() {}

function selectRandomStudent(arr) {
    return arr [Math.floor(Math.random(arr) * arr.length)]
}

const age = 21
const students = ['Yme', 'Arne', 'Mert', 'Yaron']

console.log(sum(age, 12));
console.log(20);
console.log(selectRandomStudent(students));

//function showMessage() {
    //console.log('Answeer Checker Message', message)
//}


//function checkAnswer(answer, solution, callback) {
    //if (answer === solution) {
        
        //callback();

       // return true;
    //}
        //callback();

        //return false;

//}


//checkAnswer('ja', 'ja', showMessage())
