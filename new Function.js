// new Function


// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2)); // 3


let sayHo = new Function ('console.log("Ho~")');

sayHo() // Ho~