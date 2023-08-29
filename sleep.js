// sleep

// 동기 지연  별도 기능이 아니므로 직접 구현

function sleep(ms) {
    const wakeUp = Date.now() + ms
    while (Date.now() < wakeUp) {
    }
}


function test() {
    console.log('시작')
    sleep(2000)
    console.log('동작')
}

console.log('-- 동기 지연 --')
test() // 시작  -> 동작


// 비동기 지연

function sleep2(ms) {
    return new Promise((res) => setTimeout(res, ms))
}

function test2() {
    console.log('시작')
    sleep2(2000).then(() => console.log('동작'))
    console.log('끝!')
}

console.log('-- 비동기 지연 --')
test2() // 시작 --> 끝! --> 동작


function sleep3(ms) {
    return new Promise((res) => setTimeout(res, ms))
}

function test3() {
    console.log('시작')
    sleep3(2000)
        .then(() => console.log('동작'))
        .then(() => console.log('끝!'))
}

console.log('-- 비동기 지연 수정 --')
test3() // before -> after -> done


// 비동기 지연 async await

function sleep4 (ms) {
    return new Promise((res) => setTimeout(res, ms))
}

async function test4() {
    console.log('시작')
    await sleep4(4000)
    console.log('동작')
}

console.log('-- 비동기 지연 async/await --')
test4()
console.log('끝!')
