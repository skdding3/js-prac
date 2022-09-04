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