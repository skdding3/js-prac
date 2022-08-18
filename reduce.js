// 1부터 4까지 누적을 구한다.
const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);

console.log(sum); // 10

// 평균 구하기
const values = [1, 2, 3, 4, 5, 6];

// 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환.
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); // 3.5

//  최대값 구하기
const values2 = [1, 2, 3, 4, 5];

const max = values2.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

const max2 = Math.max(...values2);
// var max2 = Math.max2.apply(null, values2);

console.log(max2);

// 요소의 중복 횟수 구하기

const fruits = ["banana", "apple", "orange", "orange", "apple"];

const count = fruits.reduce((acc, cur) => {
  // 첫번째 순회시 acc 초기값은 {} cur은 첫번째 요소인 banana
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당
  // 만약 프로퍼티 값이 undefined (처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화 한다.
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);
