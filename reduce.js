// 1부터 4까지 누적을 구한다.
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum); // 10

// 평균 구하기
const values = [1, 2, 3, 4, 5, 6]

// 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환.
const average = values.reduce((acc, cur, i, {length}) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average) // 3.5