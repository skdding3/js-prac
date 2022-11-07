// setTimeout

function showName(name) {
    console.log(name);
}

// setTimeout(함수, 시간, 인수);

setTimeout(showName, 2000, 'Sunki');


// setInterval

let num = 0;

function showTime() {
    console.log(`안녕하세요 접속한지 ${num++}초가 지났습니다.`)
    if (num > 5) {
        clearInterval(tId)
    }
}

const tId = setInterval(showTime, 1000)

