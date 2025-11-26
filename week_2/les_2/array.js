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