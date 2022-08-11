// #8 Callback Function



// s: 반복 수행 정의


// n번 만큼 어떤 일을 반복한다.
function repeat(n) {
    // i를 0에서 시작해서 n을 넘지 않을때 까지 출력한다.
    for (var i = 0; i < n; i ++) console.log(i);
}

// repeat 함수에 호출하는 console.log에 강하게 의존하고 있어 다른 일을 할 수 없다.

repeat(10)

// 0 1 2 3 4 5 6 7 8 9


// 홀수 만 출력하는 다른 일을 하고 싶어, 새로 함수를 정의한다.
function repeat1(n) {
    for (var i = 0; i< n; i++) {
        // i가 홀수 일때만 출력한다.
        if (i % 2) console.log(i)
    }
}

repeat1(10)

// 1 3 5 7 9

// e : 반복 수행 정의


// s: 콜백 함수 적용

function repeat2(n, f) {
    for (var i = 0; i< n; i++) {
        f(i); // i를 전달하면서 f를 호출한다.
    }
}

var logAll = function (i) {
    console.log(i);
}

// 반복 호출할 함수를 인수로 전달한다.
repeat2(5, logAll);

// 1,2,3,4,5

var logOdds = function (i) {
    if (i % 2) console.log(i)
}

// 반복 호출할 함수를 인수로 전달한다.
repeat2(5, logOdds);

// 1, 3

// e: 콜백 함수 적용


// s: 콜백 함수 비동기 응용

document.getElementById('myButton').addEventListener('click', function (){
    console.log('button clicked')
})

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메세지를 출력한다.
setTimeout(function () {
    console.log('1초 경과!')
}, 1000)

// e: 콜백 함수 비동기 응용