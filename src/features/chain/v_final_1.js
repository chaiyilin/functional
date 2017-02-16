//immutable auto-curried iteratee-first data-last methods
const map =require('lodash/fp/map');
const flatten = require('lodash/fp/flatten');
const sortBy = require('lodash/fp/sortBy');
const flow = require('lodash/fp/flow');

const result=flow(
    map(x => [x, x*2]),//Currying
    flatten,
    sortBy(x => x)
)([1,2,3]);
console.log(result);
