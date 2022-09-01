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
