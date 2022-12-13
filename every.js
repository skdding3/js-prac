// every

let objArr = [{name: "선기", age: 31}, {name: "길준", age: 27}, {name: "재우", age: 29}]

console.log(objArr.every((item) => item.age>26)) // true
console.log(objArr.every((item) => item.age>28)) // false