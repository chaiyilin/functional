//much more functional
var countryPath = ['address', 'country'];
var countryL = R.lens(R.path(countryPath), R.assocPath(countryPath));
var inCountry = R.curry((country, person) =>
    R.equals(R.view(countryL, person), country));

people.filter(inCountry('US')).map(console.log);