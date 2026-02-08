const obj = {
    __proto__: "sasas",
    handler:"sda".length,
    toString() {
        return `d ${super.toString()}`;
    },
    ["prop_" + (() => 422)()]: 42,
};
console.log(obj.toString());
console.log(obj['prop_422']);
