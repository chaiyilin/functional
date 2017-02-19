//http://stackoverflow.com/questions/11136362/prototype-for-interception-in-javascript
Function.prototype.createInterceptor = function createInterceptor(fn) {
    var scope = {},
        original = this; //<-- add this
    return function () {
        if (fn.apply(scope, arguments)) {
            return original.apply(scope, arguments);
        }
        else {
            return null;
        }
    };
};
var interceptMe = function cube(x) {
    console.info(x);
    return Math.pow(x, 3);
};
//
var cube = interceptMe.createInterceptor(function (x) {
    return typeof x === "number";
});

cube(3) //27 - the argument is valid so the original function is called
cube("asd") //null - Not valid according to the interceptor so null is returned