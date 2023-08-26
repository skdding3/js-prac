// export


export const arr = [10, 20, 30, 40]; // 개별로 선언하여 export

export { arr2, getName }; // 묶어서 export

const arr2 = [100, 200, 300, 400];
function getName() {
    return 'aaa'
}


// default export


let cube = function cube(x) {
    return x * x * x;
}

export default cube;


// import

import * as sunkiModule from "sun-module.js"; // 모듈 전체 가져오기
// sunkiModule.sayHi()

import {mySunki} from "sun-module.js" // 하나의 멤버 가져오기

import {foo, bar} from "sun-module.js" // 여러개의 멤버 가져오기