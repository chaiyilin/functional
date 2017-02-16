const fp =require('lodash/fp');
const result=fp.flow(
    fp.map(x => [x, x*2]),
    fp.flatten,
    fp.sortBy(x => x)
)([1,2,3]);
console.log(result);