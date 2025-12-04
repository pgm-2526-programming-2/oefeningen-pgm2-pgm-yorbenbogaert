const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function mergeArrays(a, b) {
    return [...a, ...b]
    
}


const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray)