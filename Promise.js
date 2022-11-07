// Promise

//
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('ok')
//         reject(new Error('error'))
//     }, 3000)
// })


// pr.then(
//     function (result) {
//         console.log(result + '가지러 가자')
//     }
// ).catch(
//     function (err) {
//         console.log('다시 주문해주세요')
//     }
// ).finally(
//     function (){
//         console.log('order end')
//     }
// )


function getPro(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 1000)
    })
}

async function getPr2() {
    try {
        const result = await getPro('pro');
        console.log(result)
    } catch (e) {
        console.log(e)
    }

}

console.log('시작');
getPr2()

