// if less  if를 줄이는 코드구조들


// if 사용시
// function executePayment(paymentType) {
//     if(paymentType == "KAKAO") {
//         return "카카오 결제"
//     } else if(paymentType == "NAVER") {
//         return "네이버 결제"
//     } else if (paymentType == "APPLE") {
//         return "애플 결제"
//     } else if (paymentType == "PAYCO") {
//         return "페이코 결제"
//     }
// }


// KEY - VALUE
const paymentMap = {
    "KAKAO": "카카오 결제",
    "NAVER": "네이버 결제",
    "APPLE": "애플 결제",
    "PAYCO": "페이코 결제"
}

// 이러한 코드를 사용하게 되면, 결제사항이 추가될때, 비교적 코드수정이 간편하다.
function executePayment(paymentType) {
    return paymentMap[paymentType]
}

console.log(executePayment("KAKAO")) // 카카오 결제
console.log(executePayment("APPLE")) // 애플 결제




function payOnKaKao() {console.log("카카오 결제 처리중")}
function payOnNaver() {console.log("네이버 결제 처리중")}
function payOnApple() {console.log("애플 결제 처리중")}
function payOnPayco() {console.log("페이코 결제 처리중")}


// if 사용시
// function executePayment2(paymentType) {
//     if (paymentType == "KAKAO") {
//         payOnKaKao();
//     } else if (paymentType == "NAVER") {
//         payOnNaver();
//     } else if (paymentType == "APPLE") {
//         payOnApple();
//     } else if (paymentType == "PAYCO") {
//         payOnPayco();
//     }
// }

const paymentMap2 = {
    KAKAO() {
        payOnKaKao()
    },
    NAVER() {
        payOnNaver()
    },
    APPLE() {
        payOnApple()
    },
    PAYCO() {
        payOnPayco()
    }
}


// 비즈니스 로직
function executePayment2(paymentType) {
    paymentMap2[paymentType]();
}

executePayment2("NAVER"); // 네이버 결제 처리중
executePayment2("PAYCO"); // 페이코 결제 처리중
