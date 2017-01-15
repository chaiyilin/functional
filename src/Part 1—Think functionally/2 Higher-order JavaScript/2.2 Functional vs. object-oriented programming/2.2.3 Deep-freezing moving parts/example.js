//shallow freeze
var person = Object.freeze(new Person('Haskell', 'Curry', '444-44-4444'));
person.firstname = 'Bob';//TypeError: Cannot assign to read only property '_firstname' of #<Person>

//deep freeze
var isObject = (val) => val && typeof val === 'object';
function deepFreeze(obj) {
    if (isObject(obj)
        && !Object.isFrozen(obj)) {
        Object.keys(obj).forEach(name => deepFreeze(obj[name]));
        Object.freeze(obj);
    }
    return obj;
}