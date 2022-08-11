// #8 Callback


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