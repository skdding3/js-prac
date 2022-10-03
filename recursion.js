// 재귀 recursion
function pow (x, n) {
    let result = 1;

    // 반복문을 돌면서 x를 n번 곱함
    for (let  i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 3)); // 8


// 재귀적인 사고 방식
function pow2 (x, n) {
    if(n == 1) {
        return x;
    } else {
        return x * pow2(x, n-1);
    }
}

console.log(pow2(2, 3)) // 8

// if 대신 조건부 연산자 ?를 사용한다.
function pow3 (x, n) {
    return (n == 1) ? x : (x * pow3(x, n - 1));
}

console.log(pow3)