// sleep

// 동기 지연  별도 기능이 아니므로 직접 구현

function sleep(ms) {
    const wakeUpTime = Date.now() + ms
    while (Date.now() < wakeUpTime) {
    }
}


function test() {
    console.log('before')
    sleep(2000)
    console.log('after')
}

console.log('-- 동기 지연 --')
test() // before  -> after


// 비동기 지연

// function sleep2(ms) {
//     return new Promise((res) => setTimeout(res, ms))
// }
//
// function test2() {
//     console.log('before')
//     sleep2(2000).then(() => console.log('after'))
//     console.log('done!')
// }

// console.log('-- 비동기 지연 --')
// test2() // before --> done! --> after


// function sleep3(ms) {
//     return new Promise((res) => setTimeout(res, ms))
// }
//
// function test3() {
//     console.log('before')
//     sleep3(2000)
//         .then(() => console.log('after'))
//         .then(() => console.log('done!'))
// }
//
// console.log('-- 비동기 지연 수정 --')
// test3() // before -> after -> done


// 비동기 지연 async await

function sleep4 (ms) {
    return new Promise((res) => setTimeout(res, ms))
}

async function test4() {
    console.log('before')
    await sleep4(4000)
    console.log('after')
}

console.log('-- 비동기 지연 async/await --')
test4()
console.log('done!')
