// 깊은 복사 (Deep Copy)


const a = 'a';
let b = 'b';

b = 'c';


console.log(a); // a
console.log(b);  // c


// 기존 값에 영향을 끼치지 않는다.

/**
 * JSON.stringify() , JSON.parse()
 */

const object = {
    a: "a",
    number: {
        one: 1,
        two: 2,
    },
    arr: [1, 2, [3, 4]],
};

const copy = JSON.parse(JSON.stringify(object));

copy.number.one = 3;
copy.arr[2].push(5);

console.log(object === copy);  // false
console.log(object.number.one === copy.number.one);  // false
console.log(object.arr === copy.arr); // false


console.log(object);// { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copy);// { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }
