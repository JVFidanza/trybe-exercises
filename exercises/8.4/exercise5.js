
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    let sumA = names.reduce((acc, string) => {
        for(let i = 0; i < string.length; i++){
            if(string[i] === 'A' || string[i] === 'a'){
                acc++;
            }
        }
        return acc;
    }, 0);
    return sumA;
}

// console.log(containsA());

assert.deepStrictEqual(containsA(), 20);