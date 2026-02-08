// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"