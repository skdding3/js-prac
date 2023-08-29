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


// function getPro(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name)
//         }, 1000)
//     })
// }
//
// async function getPr2() {
//     try {
//         const result = await getPro('pro');
//         console.log(result)
//     } catch (e) {
//         console.log(e)
//     }
//
// }
//
// console.log('시작');
// getPr2()


// callback function Promise로 감싸기

// example

async getCpuInfoMonitor() {
    try {
        const cpuUsage = osUtils.cpuUsage(function (v) {
            console.log(v);
            return v;
        });
    } catch (err) {
        throw new Error('응답 없음')
    }
}

// solution

async getCpuInfoMonitor() {
    try {
        function getData() {
            return new Promise((resolve, reject) => {
                osUtils.cpuUsage(function (response) {
                    if(response) {
                        resolve(response)
                    }
                    reject(new Error('응답없음'))
                })
            })
        }

        return getData()
    } catch (err) {
        throw new Error('응답 없음')
    }
}

