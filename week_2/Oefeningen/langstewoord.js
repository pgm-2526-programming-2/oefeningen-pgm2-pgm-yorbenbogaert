let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];

let langsteWoord = woordenArray.reduce((longest, current) => {
    if (current.length > longest.length) {
    return current;
} else {
    return longest;
}
})

console.log(langsteWoord); // schrijf hier de logica om het langste woord te vinden // geeft 'banaan'