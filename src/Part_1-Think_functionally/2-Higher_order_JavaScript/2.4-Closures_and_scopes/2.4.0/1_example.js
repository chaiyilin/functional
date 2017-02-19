//a closure is also called a static or lexical scope surrounding the function definition
function zipCode(code, location) {
    let _code = code;
    let _location = location || '';
    return {
        code: function () {
            return _code;
        },
        location: function () {
            return _location;
        }
    };
}