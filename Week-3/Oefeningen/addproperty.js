const originalObject = {
    name: "Alice"
};

function addProperty(a) {
    return a
}

const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject)