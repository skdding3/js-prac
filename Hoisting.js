// 호이스팅(Hoisting)

// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double()

/** 자바스크립트는 위에서 아래로 내려가며, 읽기 때문에
 *  아래와 같이 함수를 실행하면,
 *  double()이 실행되지 않음.
 */
const double = function () {
    console.log(a * 2);
}

/** 호이스팅(최상단으로 끌어올려짐)이 발생하여
 * 함수가 작동!
 * 용도는 함수에 이름을 통해 작동을 추측하여, 가독성을 올려d
 */

function double() {
    console.log(a * 2);
}
