// Jquery serialize

$("input, textarea, select").serialize();

$("form").on("submit", function (event) {
  event.preventDefault();
  console.log($(this).serialize());
});

// ajax를 활용한 실습 코드
$("#btnSearch_2").click(function () {
  $.ajax({
    url: "/admin/member/management",
    method: "POST",
    data: $("form[id=account_search]").serialize(),
    success: function (result) {
      grid.resetData(result);
    },
  });
});

// grid가 가지고 있는 데이터 cell을 검색할때, form에 있는 value값을 토대로 가져온다.(serialize)
