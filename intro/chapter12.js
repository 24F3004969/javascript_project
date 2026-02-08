// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    get() {

    }

    set() {

    }
}

// Expression; the class is anonymous but assigned to a variable
const Rect1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
};

// Expression; the class has its own name
const Rect2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

const r1 = new Rectangle(3, 5)
const r2 = new Rect1(3, 5)
const r3 = new Rect2(3, 5)
console.log(r1.area(), r2, r3)


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next_() {
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        },
    };
    return rangeIterator;
}

function* makeRangeIterator1(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i * 2;
    }
    return iterationCount;
}


const iter = makeRangeIterator1(1, 10, 2);

let result = iter.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const Car1 = {
    make: "Eagle",
    model: "Talon TSi",
    year: 1993
}
console.log(Car1===new Car("Eagle", "Talon TSi", 1993));