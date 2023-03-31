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



const log = console.log;
//
// let y = 100;
// function fn() {
//     let x = 10;
//     log(x, y)
// }
//
// fn()

// lexical env
// 실행 환경기록
// 바깥쪽 외부 참조 정보

function outer() {
    let x = 10;
    function inner () {
        log(x)
    }
    return inner
}

const fn = outer()

fn()


// 데이터 은닉
