const {map,flatten,sortBy,flow}= require('lodash/fp');
//import {map,flatten,sortBy,flow} from 'material-ui/Divider';
const resultFunc=flow(
    map(x => [x, x*2]),
    flatten,
    sortBy(x => x)
);
const result = flow(resultFunc, resultFunc)([1, 2, 3]);
console.log(result);