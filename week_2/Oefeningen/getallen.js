const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];


const getallenGroterTien = willekeurigeGetallen.filter(willekeurigGetal => willekeurigGetal < 10);

console.log(getallenGroterTien);

const deleteLast = willekeurigeGetallen.pop();

console.log(willekeurigeGetallen)

const deleteFirst = willekeurigeGetallen.shift();

console.log(willekeurigeGetallen);

const addFive = willekeurigeGetallen.push(5); 

console.log(willekeurigeGetallen);

const getalGroterTwintig = willekeurigeGetallen.every(willekeurigGetal => willekeurigGetal < 20);

console.log(getalGroterTwintig);
