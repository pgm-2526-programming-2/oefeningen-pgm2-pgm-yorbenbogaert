// Ophalen van waardes uit een array of object en die opslaan in een variabele
const person = ["Yorben", "Bogaert"];

const firstName = person[0];
const lastName = person[1];

// Destructuring 
// Door aan de linkerzijde vierkante haakjes te gebruiken weten we dat we waardes uit een array gaan destructuren. 
const [firstN, lastN] = ["Yorben", "Bogaert"];
const [firstNm, lastNm] = person;

const results= ["Ignace", "Arif", "Kobe", "Justin"]
const [firstWinner, , thirdWinner] = results; // je kan elementen overslaan.

console.log(firstWinner, thirdWinner);

const songs = [{
    name: "Ophelia",
    artist: "Taylor Swift"

},

{
    name: "still DRE",
    artist: "Snoop Dogg"
}];



const [,firstTrack, lastTrack] = songs; // let op de komma!
console.log(lastTrack); //undefined

// Combiniatie van de rest operator en destructuring
// Doel! Array opsplitsen in eerste element en de rest.
const [head, ...tail] = [1, 2, 3, 4, 5]