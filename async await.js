// async
// async는 함수를 감싸 프라미스를 반환한다.


// async function getName() {
//     // return "Sunki" // Promise { 'Sunki' }
//     // return Promise.resolve("Sunki")
//     throw new Error("err")
// }
//
//
// console.log(getName())
//
// getName().catch((err) => {
//     console.log(err) // Sunki
// })


// await
// await는 프라미스가 처리될 때 까지 함수 실행을 기다리게 만든다.

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 3000)
    })
}

async function showName() {
    const result = await getName("Sunki")
    console.log(result)
}

console.log("start")
showName() // 3초후 Sunki
