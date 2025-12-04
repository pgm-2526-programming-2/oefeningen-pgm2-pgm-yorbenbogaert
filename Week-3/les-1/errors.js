// throw "Fout!";

const message = new Error("Er ging iets mis!");
//throw message;

try {
    console.log('We voeren code uit!');
    // Real-life zelden gaan we zelf een error throwen, dit komt meestal uit library of ingebouwde js-feature.

    // Bijvoorbeeld item in databank bestaat niet!
    throw new Error('Item in databank bestaat niet!');
} catch (error) {
    console.log('Hier is de code hier geraken we als er iets misgaat', error.message);
} finally {
    console.log('Code die sowieo moet uitgevoerd worden zelf als er iets misgaat, maar ook indien niet.')
}