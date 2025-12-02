const persoon = {
    naam:"Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville"
    }
};

console.log(persoon.adres.nummer);

persoon.telefoon = "+32 0468 79 65 43";

console.log(persoon);

const extraInfo = {
    hobby: "gamen",
    favorieteKleur: "zwart"
};

Object.keys(extraInfo).forEach(key => {
    persoon[key] = extraInfo[key]
});

console.log(persoon)