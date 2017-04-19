const {map,flatten,sortBy,flow}= require('lodash/fp');
//import {map,flatten,sortBy,flow} from 'lodash/fp';
const resultFunc=flow(
    map(x => [x, x*2]),
    flatten,
    sortBy(x => x)
);
const result = flow(resultFunc, resultFunc,map(x => [x, x*2]))([1, 2, 3]);
console.log(result);