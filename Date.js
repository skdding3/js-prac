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

