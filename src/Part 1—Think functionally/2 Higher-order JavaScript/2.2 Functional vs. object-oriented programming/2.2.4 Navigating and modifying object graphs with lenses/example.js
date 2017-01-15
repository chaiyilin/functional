//Lenses are valuable because they give you an unobtrusive mechanism for manipulating objects,
// even if these are legacy objects or objects outside of your control
var person = new Person('Alonzo', 'Church', '444-44-4444');
var lastnameLens = R.lenseProp('lastName');
//getter
R.view(lastnameLens, person); //-> 'Church'
//setter
var newPerson = R.set(lastnameLens, 'Mourning', person);
newPerson.lastname; //-> 'Mourning'
person.lastname; //-> 'Church'

//also support nested properties
person.address = new Address(
    'US', 'NJ', 'Princeton', zipCode('08544', '1234'),
    'Alexander St.');
var zipPath = ['address', 'zip'];
var zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));
R.view(zipLens, person); //-> zipCode('08544', '1234')

var newPerson = R.set(zipLens, person, zipCode('90210', '5678'));
R.view(zipLens, newPerson); //-> zipCode('90210', '5678')
R.view(zipLens, person); //-> zipCode('08544', '1234')
newPerson !== person; //-> true