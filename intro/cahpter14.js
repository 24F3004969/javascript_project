import * as assert from "node:assert";
const a = {}; // fresh empty object
// Pass the identity in `a` to `b`:
const b = a;

// Now `a` and `b` point to the same object
// (they “share” that object):
assert.equal(a === b, true);

// Changing `a` also changes `b`:
a.name = 'Tessa';
console.log(a,b);
assert.equal(b.name, 'Tessa');
let obj = { prop: 'value' };
obj = {};
console.log(obj);


const obj1 = {}; // fresh empty object
assert.equal(obj1 === obj1, true); // same identity
assert.equal({} === {}, false); // different identities, same content