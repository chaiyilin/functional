const _ = require('lodash');

// 2 problems:
// importing the entirety of lodash
// hard to extend with new method
let result = _.chain([1, 2, 3])
    .map(x => [x, x * 2])
    .flatten()
    .sort()
    .value();
console.log(result);

const map =require('lodash/fp/map');
const flatten = require('lodash/fp/flatten');
const sortBy = require('lodash/fp/sortBy');
const flow = require('lodash/fp/flow');

result=flow(
    map(x => [x, x*2]),
    flatten,
    sortBy(x => x)
)([1,2,3]);
console.log(result);