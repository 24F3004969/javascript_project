const createPet = function (name) {
    let sex;

    const pet = {
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };

    return pet;
};
const getCode = (function () {
    const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

    return function () {
        return apiCode;
    };
})();

console.log(getCode()); // "0]Eal(eh&2"


function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // 20 (instead of 10)