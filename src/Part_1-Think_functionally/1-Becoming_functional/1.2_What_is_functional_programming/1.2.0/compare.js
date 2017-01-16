//old
function printMessage(elementId, format, message) {
    document.querySelector(`#${elementId}`).innerHTML =
        `<${format}>${message}</${format}>`;
}
printMessage('msg', 'h1', 'Hello World');

//new
//chain-like manner by passing the return value of one as input to the next
//from right to left
var printMessage = run(addToDom('msg'), h1, echo);//h1 is a function
printMessage('Hello World');

//reuse
var printMessage = run(console.log, repeat(3), h2, echo);
printMessage('Get Functional');