// concat

// concat 은 두 개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수이며,

// 입력값을 문자열 대신 배열을 사용하면 두 개의 배열을 하나의 배열로 만들어주는 역활도 하는 함수

// 2차원 배열
let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// 빈배열을 concat으로 합쳐준다.
const arrayConcat = [].concat(...array);

console.log(arrayConcat); // [1,2,3,4,5,6]
