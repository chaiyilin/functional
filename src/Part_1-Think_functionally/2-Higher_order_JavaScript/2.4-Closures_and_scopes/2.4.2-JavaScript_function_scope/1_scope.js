//JavaScript’s scoping mechanism works as follows:
//1 It checks the variable’s function scope.
//2 If not in the local scope, it moves outward into the surrounding lexical scope, searching for the variable reference until it reaches the global scope.
//3 If the variable can’t be referenced, JavaScript returns undefined.
var x = 'Some value';
function parentFunction() {
    function innerFunction() {
        console.log(x);
    }

    return innerFunction;
}
var inner = parentFunction();
inner();