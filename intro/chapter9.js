function sum(a, b, c) {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s = s + parseInt(arguments[i])
    }
    return s;
}

console.log(sum("2", "5", "6", "7", "8"));

function getThis() {
    return this;
}

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

function Person() {
    this.age = 0;

    setInterval(()=> {
        this.age++;
        console.log(this.age);
    }, 100);
}

const p = new Person();

