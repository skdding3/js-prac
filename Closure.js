// Closure


/**
 * 함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근이 가능
 */


/**
 * 전역 렉시컬 환경
 */
let one;
one = 1;

function addOne(num) {
    console.log(one + num);
}


/**
 * 내부 렉시컬 환경
 */

addOne(5) // 6

// 전역 렉시컬 환경
function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

// makeAdder 렉시컬 환경
const add3 = makeAdder(3);

// 익명함수 렉시컬 환경
console.log(add3(2)); // 5
