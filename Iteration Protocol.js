const myIterable = {}

myIterable[Symbol.iterator] = function *() {
    let i = 1;
    while(i<=100) {
        yield i++;
    }
}

for (const n of myIterable) { //next가 없어도 프로토콜을 준수함으로, yield가 계속 돌수 있다.
    console.log(n); // 1 ~ 100
}