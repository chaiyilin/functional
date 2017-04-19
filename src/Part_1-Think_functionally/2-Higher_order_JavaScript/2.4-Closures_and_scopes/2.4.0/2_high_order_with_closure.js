//a function’s closure includes the following:
//All function parameters (params and params2, in this case)
//All variables in the outer scope (including all global variables, of course),
// as well as those declared after the function additionalVars
var outerVar = 'Outer';
function makeInner(params) {
    var innerVar = 'Inner';

    function inner() {
        console.log(
            `I can see: ${outerVar}, ${innerVar}, and ${params}`);
    }

    return inner;
}
var inner = makeInner('Params');
inner();