// 스코프(유효범위)


function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 몸체 내부이다.

    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // x is not defined

var var1 = 1; // 1

if (true) {
    var var2 = 2; // 2
    if (true) {
        var var3 = 3 // 3
    }
}

function foo() {
    var var4 = 4; // var4 is not defined

    function bar() {
        var var5 = 5; // var5 is not defined
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);