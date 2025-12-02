const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  // Aangepaste methode om totale prijs te berekenen
  calculateTotal: function () {
    let total = 0;
    const items = Object.values(shoppingCart);
    for (let item of this.items) {
      if (item.price) {
        total += item.price;
      }
    }
    return total; 
  }
};

const totalPrice = shoppingCart.calculateTotal();
console.log("Totale prijs:", totalPrice);

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart);
console.log("Namen en prijzen van items:", itemEntries);