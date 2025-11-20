let myNumber = 20;
function increasebyTen(a = 0) {
    myNumber = a + 10;
}
increasebyTen(myNumber);
console.log("Number:", myNumber)