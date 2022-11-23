// 구조분해할당

//************ 배열 분해하기 ************/
let arr = ["Sunki", "Kim"]

// 구조분해할당을 이용해서
// firstName에는 arr[0]을
// surName에는 arr[1]을 할당

let [firstName, surName] = arr;

// or
// let [firstName, surName] = "Sunki Kim".split(' ');

console.log(firstName)
console.log(surName)

// ES5
var arr2 = [1, 2, 3];

var one = arr2[0];
var two = arr2[1];
var three = arr2[2];

console.log(one, two, three); // 1, 2, 3

// ES6

const arr3 = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr3를 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.

const [one1, two1, three1] = arr3;


console.log(one1, two1, three1); // 1, 2, 3




// ex)  url parsing

function parseURL(url = '') {
    // '://' 앞의 문자열(protocal)rhk '/' 이전의 '/'로 시작하지 않는 문자열(host)과
    // '/' 이후의 문자열(path)을 검색한다.
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);
    /*
    [
     'https://developer.mozilla.org/ko/docs/Web/JavaScript',
     'https',
     'developer.mozilla.org',
     'ko/docs/Web/JavaScript',
     index: 0,
     input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
     groups: undefined
    ]
     */

    if (!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.

    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };

}
const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');

console.log(parsedURL);
/*
{
  protocol: 'https',
  host: 'developer.mozilla.org',
  path: 'ko/docs/Web/JavaScript'
}
 */


//************ 객체 분해하기 ************/

// ES5
var user = {firstName : 'Sunki', lastName : 'Kim'};

var firstName1 = user.firstName;
var lastName1 = user.lastName;

console.log(firstName1, lastName1); // Sunki Kim

// ES6
const user2 = { firstName2: 'Sunki', lastName2: 'Kim' };
const { lastName2, firstName2 } = user2

console.log(firstName2, lastName2); // Sunki Kim


// todo 예시
function printTodo(todo) {
    console.log(`오늘 ${todo.content}은 ${todo.completed ? '완료' : '진행중'} 상태입니다`);
}
printTodo({id: 1, content: '블로깅', completed: true});
// 오늘 블로깅은 완료 상태입니다.

// todo 예시2
function printTodo2({ content, completed }) {
    console.log(`오늘 ${content}은 ${completed ? '완료' : '진행중'} 상태입니다`);
}
printTodo2({ id: 1, content: '블로깅', completed: false})
// 오늘 블로깅은 진행중 상태입니다.


const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(fruits)
