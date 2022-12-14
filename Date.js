// 날짜 관련 연습

var date = new Date();  // 오늘 날짜 호출


// yy-mm-dd 양식 만들기
var year = date.getFullYear(); // 2022

// date.getMonth -> 8 여기에서 월이 두자리가 되게 slice를 해준다.
var month = ('0' + (date.getMonth() + 1)).slice(-2); // 09

// day도 마찬가지
var day = ('0' + date.getDate()).slice(-2); // 14

// 각 변수 사이에 하이픈을 넣어준다.
var dateString = year + '-' + month  + '-' + day;
// 2022-09-14



const getDataDiff = (day1, day2) => {
    var date1 = new Date(day1);
    var date2 = new Date(day2);

    var diffDate = date1.getTime() - date2.getTime()
    return Math.abs(diffDate/ (1000 * 60 * 60 * 24)) // ms * sec * min * hour = day
}

console.log(getDataDiff("2022-09-01", "2022-09-14") + '일');
// 13일

dateISO = date.toISOString()

console.log(dateISO);
// 2022-09-14T22:57:34.675Z

console.log(dateISO.slice(0, 10));
console.log(dateISO.slice(0, 10).replace(/-/g,''));


// 오늘 날짜 맞추기 (한국시간)
var date = new Date()
const offset = new Date().getTimezoneOffset() * 60000;
const today = new Date(Date.now() - offset);
dateISO = today.toISOString()
dateISO = dateISO.slice(0, 10)



// 생년월일 계산 로직
var today = new Date()
var thisYear = today.getFullYear()
$('#birthDay').focusout(function () {
    var birth = thisYear - parseInt(19 + $(this).val().substring(0, 2));
    if (birth <= 60) {
        alert('60세 이상부터 신청 가능합니다.')
    }
})