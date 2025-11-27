const woorden = [
    'mal', 
    'snurkduif',
    'bromvlieg', 
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smrufenmuts',
];

woorden.forEach((word) => {
    console.log(`${word}-`);
    
});

const filter = woorden.filter(woord => woord.startsWith("b"));
console.log(filter);

woorden.unshift('Hello');
console.log(woorden);

const meerdereWoorden = woorden.some(woord => woord.length > 2);
console.log(meerdereWoorden)

const sorteerWoorden = woorden.sort();
console.log(sorteerWoorden);

const element = woorden[2];
console.log(element);

const meerDanVier = woorden.filter(woord => woord.length < 6);
console.log(meerDanVier);