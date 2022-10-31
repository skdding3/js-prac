// if less  if를 줄이는 코드구조들


const paymentMap = {
    "KAKAO": "카카오 결제",
    "NAVER": "네이버 결제",
    "APPLE": "애플 결제",
    "PAYCO": "페이코 결제"
}


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

// 이러한 코드를 사용하게 되면, 결제사항이 추가될때, 비교적 코드수정이 간편하다.
function executePayment(paymentType) {
    return paymentMap[paymentType]
}

console.log(executePayment("KAKAO"))
