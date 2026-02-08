const sales = "Toyota";

function carTypes(name) {
    return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car["myCar"]); // Saturn
console.log(car["getCar"]); // Honda
console.log(car.special); // Toyota