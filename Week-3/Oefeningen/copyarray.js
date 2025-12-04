const originalArray = [1, 2, 3];

function copyArray(a) {
    return a = [...originalArray]
}
const copiedArray = copyArray(originalArray);
console.log(copiedArray);