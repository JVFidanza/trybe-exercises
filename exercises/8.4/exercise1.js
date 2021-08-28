
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    let mat = arrays.reduce((carry, array) => {
        array.forEach((ar) => {
            carry.push(ar);
        })
        return carry;
    }, [])
    return mat;
}
// console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);