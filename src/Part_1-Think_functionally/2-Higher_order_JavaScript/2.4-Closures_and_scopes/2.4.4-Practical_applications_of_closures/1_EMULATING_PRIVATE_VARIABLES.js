//EMULATING PRIVATE VARIABLES
//Module pattern because it uses a single immediately invoked function expression (IIFE)
var MyModule = (function MyModule(export1) {
        let _myPrivateVar = '';
        export1.method1 = function () {
// do work
        };
        export1.method2 = function () {
// do work
        };
    }(MyModule || {})
);