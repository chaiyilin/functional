//from https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba#.2onj0nmne
const _ = require('lodash');

// 2 problems:
// importing the entirety of lodash
// hard to extend with new method
let result = _.chain([1, 2, 3]) // _.chain = (array) => wrap(array, _); // Rough concept of chain
    .map(x => [x, x * 2])
    .flatten()
    .sort()
    .value();
console.log(result);