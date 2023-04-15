// Generator

// 이터레이션 프로토콜을 구현하여 무한 이터러블을 생성하는 함수
const createIteration = function () {
    let i = 0; // 변수
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return {value: ++i}
        }
    }
}

for (const n of createIteration()) {
    if (n > 5) break;
    console.log(n); // 1,2,3,4,5
}

// async

const fetch = require('node-fetch');

function getUser(Obj, username) {
    fetch(`https://api.github.com/users/${username}`)
        // 제네레이터 객체에 비동기 처리 결과를 전달
        .then(res => res.json())
        .then(user => Obj.next(user.name));
}

// 제네레이터 객체 생성

const gene = (function* () {
    let user;
    // 비동기 처리 함수가 결과를 반환한다.
    // 비동기 처리의 순서가 보장된다.
    user = yield getUser(gene, 'Sunki');
    console.log(user); // Kim Sunki

    user = yield getUser(gene, 'Gilbert')
    console.log(user); // Gilbert Jung
}());

// 제네레이터 함수 시작
gene.next()


