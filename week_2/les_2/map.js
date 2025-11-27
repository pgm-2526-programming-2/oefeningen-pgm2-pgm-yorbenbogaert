
// VAT bij europese webshop. 
// BTW bij belgische webshop.

// Instelling
const regionNotation = 'btw';

// Object 
const product = {
    price: 25,
    name: 'Gameboy',
    [regionNotation]: 21
}

// const productKeys = ['price', 'name'];
const productKeys = Object.keys(product);

const test = 'btw';
product.color = 'Red';
product.color = 'Blue';
product[regionNotation] = 32;
product[test] = 40;

// Object length in JS
productKeys.length;

const productMap = new Map();
productMap.set('price', 25)
productMap.set('name', 'Gameboy')
productMap.set('color', 'Red');
productMap.set('color', 'Blue');
productMap.set(regionNotation, 20)

// Voordeel, Makkelijker de lengte ophalen.
const productMapLength = productMap.size;

console.log(product, productMap);