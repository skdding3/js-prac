// 구조분해할당

// 배열 분해하기
let arr = ["Sunki", "Kim"]

// 구조분해할당을 이용해서
// firstName에는 arr[0]을
// surName에는 arr[1]을 할당

let [firstName, surName] = arr;

// or
let [firstName, surName] = "Sunki Kim".split(' ');

console.log(firstName)
console.log(surName)