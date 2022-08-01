// #3 Object

Object = 1;

let user = new Object();

// TypeError: Object is not a constructor

// new Object() 생성자 사용시

var Human = new Object();
Human.name = "Sunki";
Human.sex = "male";

// 객체 리터럴 {} 사용시

var Human = {
  name: "Sunki",
  sex: "male",
};
