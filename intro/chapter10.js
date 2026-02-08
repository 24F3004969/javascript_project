
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
    console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
delete Math.PI; // returns false (cannot delete non-configurable properties)
const myObj = { h: 4 };
console.log(myObj);
delete myObj.h;
// returns true (can delete user-defined properties)
console.log(myObj);

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(trees[2] in trees);
