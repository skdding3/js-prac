const arr = [1, 2, 3];

const flatMapArr = arr.flatMap((num) => [num, num * 2]);

console.log(flatMapArr); // [ 1, 2, 2, 4, 3, 6 ]
