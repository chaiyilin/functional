const chain  = require('lodash/chain');
const map  = require('lodash/map');
const value  = require('lodash/value');
const mixin  = require('lodash/mixin');
const _ = require('lodash/wrapperLodash');

mixin(_, {map: map, chain: chain, value: value});
let result = _.chain([1, 2, 3]).map(x => x + 1).value();
console.log(result);