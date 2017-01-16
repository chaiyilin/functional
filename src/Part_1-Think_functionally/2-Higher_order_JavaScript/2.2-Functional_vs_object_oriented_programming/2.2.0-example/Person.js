//Using setter methods isn’t meant to support object mutations,
// but is a way to easily create objects that have different properties without really long constructors.
// After objects are created and populated, their state never changes
class Person {
    constructor(firstname, lastname, ssn) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._ssn = ssn;
        this._address = null;
        this._birthYear = null;
    }

    get ssn() {
        return this._ssn;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get address() {
        return this._address;
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(year) {
        this._birthYear = year;
    }

    set address(addr) {
        this._address = addr;
    }

    toString() {
        return `Person(${this._firstname}, ${this._lastname})`;
    }
}
module.export=Person