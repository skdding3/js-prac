// scope method


// ** 전역 변수

var x = "global x";
var y = "global y";

function outer() { // ** 지역 변수
    var z = "outer's local z";

    console.log(x); // 1. global x
    console.log(y); // 2. global y
    console.log(z); // 3. outer's local z

    function inner() { // ** 지역 변수
        var x = "inner's local x";

        console.log(x); // 4. inner's local x
        console.log(y); // 5. global y
        console.log(z); // 6. outer's local z
    }


    inner();
}

outer();

console.log(x); // 7. global x
console.log(z); // 8. ReferenceError: z is not defined


// scope chain

// 전역 함수

function foo() {
    console.log('global function foo');
}

function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }

    foo();
}
bar();