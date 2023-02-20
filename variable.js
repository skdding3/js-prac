// 변수 (variable)


// let name;
// name = 'sunki'
//
// var age;
// age = 30
//
// const gender;
// gender = 'male'
//
//
// console.log(name) // sunki
// console.log(age) // 30
// console.log(gender) // SyntaxError: Missing initializer in const declaration


/*
 var
 */

var sayHi = 'Hi Sunki'

function greeting() {
    var nice = 'Nice to Meet You'
    console.log(nice)
}
console.log(sayHi) // Hi Sunki
greeting() // Nice to Meet You
// console.log(nice) // ReferenceError: nice is not defined

// 변수 재선언
var sayHello = '안녕 선기'
sayHello = '반가워 선기'

console.log(sayHello) // 반가워 선기

// var 호이스팅

console.log(sunki) // undefined
var sunki = '내 이름'

// var 호이스팅 문제점

var name = 'Sunki'
var age = '31'

if (age > 30) {
    var name = '선기!'
}

console.log(name) // 선기!
