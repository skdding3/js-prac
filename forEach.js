const arr = ["가", "나", "다", "라"];

arr.forEach(function (item, index, array) {
  console.log(item, index, array[index + 1]);
});

// 첫번째 인수는 배열의 각각 item
// 두번째는 배열의 index
// 세번째는 배열

// 가 0 나
// 나 1 다
// 다 2 라
// 라 3 undefined

var a = [1, 2, 3, 4, 5];
var sum = 0;
a.forEach(function (value) {
  sum += value;
});
console.log(sum);
// 15 배열의 합을 구한다.

a.forEach(function (v, i, b) {
  b[i] = v * v;
});
console.log(a);
// [ 1, 4, 9, 16, 25 ] 각 배열 요소의 제곱



// Jquery 사용시 method 해당 부분은 리스트가 뿌려진 반복되는 input에서 조건을 돌려준다.
$("input[name=waitpop_submit]").each(function () {
  var rdate = $(this).attr("rdate");
  var rtime = $(this).attr("rtime");
  var rdatetime = rdate + " " + rtime;
  //console.log(rdatetime);
  if (rdatetime == waitData) {
    $(this).hide();
  }
});


/** JQuery 실무 코드 (each) **/
if (data != null) {
  $('.list_box').show();
  $('.main_list').eq(0).hide();
}
// 리스트 비우기
$('.list_box').empty()


/**
 * 리스트 뿌리기
 * @Param {string} index 데이터 일련번호
 * @Param {string} item Vo 데이터
 * @Param {function} 데이터 뿌려준거에 대한 바인딩 반복문
 * @returns {String} 프로그램 목록
 */
$.each(data,function(index,item) {
  // 프로그램 일정
  // 일
  var programDay
  if (item.programDay == 0) {
    programDay = '월'
  } else if (item.programDay == 1) {
    programDay = '화'
  } else if (item.programDay == 2) {
    programDay = '수'
  } else if (item.programDay == 3) {
    programDay = '목'
  } else if (item.programDay == 4) {
    programDay = '금'
  }

  // 시간(시)
  var programTimeHour = item.programTimeHour
  // 10시 미만 시간 0 붙이기
  if (programTimeHour < 10) {
    programTimeHour = '0' + programTimeHour
  }

  // 시간(분)
  var programTimeMin = item.programTimeMin
  // 10분 미만 시간 0 붙이기
  if (programTimeMin < 10) {
    programTimeMin = '0' + programTimeMin
  }

  var programTimeResult = '('+ programDay + ')' + ' ' + programTimeHour + ':' + programTimeMin;


  // 프로그램 정원
  var countProgramStudent =  item.countProgramStudent
  var programMaximumPeople = item.programMaximumPeople

  var programNumResult = '(' + countProgramStudent + '/' + programMaximumPeople + ')';



  // 빈 html 코드를 위치해준다음에,
  // html 코드에 each로 돌려준다.
  var html = "<li class='main_list'>";
  html += "<div class='tit' >";
  html += "<a id='program_name' title='프로그램 정보' class='ic_person' style='cursor:pointer'>" + item.programNm + "</a>";
  html += "</div>";
  html += "<span id='program_date' class='date'>" + programTimeResult + "</span>";
  html += "<span id='program_num' class='num'>" + programNumResult + "</span>";
  html += "<div class='status'>";
  html += "<span id='program_status'>" + item.programOpen + "</span>";
  html += "</li>";



  if (countProgramStudent == programMaximumPeople) {
    console.log(html)
  }

  // ul 태그 반복
  $('.list_box').append(html);
