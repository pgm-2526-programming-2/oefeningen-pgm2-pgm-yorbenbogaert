const array1 = [1, 4, 7];

const array2 = [4, 9, 8];

function telArraysOp(array1, array2) {
    return array1.map((value, index) => value + array2[index]);
}

console.log(telArraysOp(array1, array2))
