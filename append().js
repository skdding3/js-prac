// append

$(target).append(source)


$("#list").append("<li>새로 추가된  아이템</li>");


// 실무 append 코드

// dateFirst 요소에 텍스트가 들어가는 상황
dateFirst = $('.date')
dateFirst.eq(i).text(month1 + '월' + ' ' + day1)
// 1월 30일
// append로 뒤에 요소를 더해준다.

// 2일자 월 비교
if (dateFirstMonth == dateSecondMonth) {
    dateFirst.eq(i).append('·' + day2)
} else {
    dateFirst.eq(i).append('·' + month2 + '월' + ' ' + day2)
}

// 1월 30일 · 2월 1일