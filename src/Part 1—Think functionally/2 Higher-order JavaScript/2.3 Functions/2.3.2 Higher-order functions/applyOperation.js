function applyOperation(a, b, opt) {
    return opt(a, b);
}
var multiplier = (a, b) => a * b;
applyOperation(2, 3, multiplier); // -> 6