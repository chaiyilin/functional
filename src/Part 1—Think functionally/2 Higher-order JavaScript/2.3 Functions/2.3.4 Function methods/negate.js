function negate(func) {
    return function () {
        //JavaScript supports calling functions via the function methods (like meta-functions) call and apply,
        // which belong to the function’s prototype

        //Function.prototype.apply(thisArg, [argsArray])
        //Function.prototype.call(thisArg, arg1,arg2,...)

        //thisArg is discouraged in functional programming, because it never relies on the context state

        //return !func.apply(null, arguments);//apply
        //or
        return !func(arguments);//directly call
    };
}
function isNull(val) {
    return val === null;
}
var isNotNull = negate(isNull);
isNotNull(null); //-> false
isNotNull({}); //-> true