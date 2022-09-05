// strict mode

function foo() {
    x = 10;
}
foo();

console.log(x); // ?

// ------


// strict mode 적용


'use strict';

function foo() {
    x = 10; // ReferenceError : x is not defined
}
foo();

// -------

function foo() {
    'use strict';

    x = 10; // ReferenceError ; x is not defined
}
foo();

// ------
function foo() {
    x = 10; // 에러를 발생시키지 않는다.

    'use strict';
}
foo();

// -----

(function () {
    // non-strict mode
    var a = 10;

    function foo() {
        'use strict';

        a = 20; // SyntaxError: Unexpected strict mode reserved word
    }

    foo();
}());

// ----

// 변수, 함수 , 매개변수의 삭제

(function () {
    'use strict';

    var x = 1;
    delete x; // SyntaxError : Delete of an unqualified identifier in strict mode.

    function foo(a) {
        delete a; // SyntaxError : Delete of an unqualified identifier in strict mode.
    }
    delete foo; // SyntaxError : Delete of an unqualified identifier in strict mode.
}());

// ----

// with 문의 사용

(function () {
    'use strict';

    // SyntaxError : Strict mode code may not include a with statement
    with({ x: 1}) {
        console.log(x);
    }
}());


// -----

// 일반 함수의 this
(function (){
    'use strict';

    function foo(){
        console.log(this); // undefined
    }
    foo();

    function Foo() {
        console.log(this); // Foo
    }
    new Foo();
}())


// -----

// arguments 객체

(function (a) {
    'use strict';
    // 매개변수에 전달된 인수를 재할당하여 변경

    a = 2;

    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments); // { 0: 1, length: 1}
});


// ----

