// #3 Object

// Object = 1;
//
// let user = {};

// TypeError: Object is not a constructor

// new Object() 생성자 사용시
//
// var Human = {};
// Human.name = "Sunki";
// Human.sex = "male";

// 객체 리터럴 {} 사용시

var Human = {
  name: "Sunki",
  sex: "male",
};


// 값을 순회하는 코드
for (let value of Object.values(Human)) {
  console.log(value)
  // Sunki male
}

var price = {
  banana: 2,
  orange: 4,
  meat: 1,
}


// 두번 계산하는 객체 변환 로직
let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환하여 배열 전용 메서드인 map을 적용한다. 이후 fromEntries를 사용해 배열을 다시 객체로 되돌린다.
    Object.entries(price).map(([key, value]) => [key,value * 2])
);

console.log(doublePrices.orange)
