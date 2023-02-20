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


/**
 * var
 * @type {string}
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

// var name = 'Sunki'
// var age = 31
//
// if (age > 30) {
//     var name = '선기!'
// }
//
// console.log(name) // 선기!


/**
 * let
 * @type {string}
 */

let age = 31

if (age > 30) {
    let name = '선기!'
    console.log(name) // 선기!
}

// console.log(name) // ReferenceError: name is not defined


// 재선언 불가

let male = 'Man'
// let male = 'M' // SyntaxError: Identifier 'male' has already been declared
male = 'M'
console.log(male) // M

// 범위 차이 동작
let work = 'ing'
let day = 31

if (day > 30) {
    let work = 'Done!'
    console.log(work) // Done!
}

console.log(work) // ing

// let 호이스팅

// console.log(coffee) // ReferenceError: Cannot access 'coffee' before initialization
let coffee = 'starbucks'

/**
 * const
 * @type {string}
 */

const meal = 'bob'
// meal = 'ramen' // TypeError: Assignment to constant variable.
// const meal = 'kimchi'// SyntaxError: Identifier 'meal' has already been declared

// 속성 변경

const dinner = {
    bob: '햇반',
    banchan: '스팸'
}

dinner.banchan = '김치찌개'

console.log(dinner) // { bob: '햇반', banchan: '김치찌개' }


// 호이스팅

console.log(noodle) // ReferenceError: Cannot access 'noodle' before initialization
const noodle = '소면'
