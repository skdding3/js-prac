// ajax

$('request').click(function () {
  
  // json 형식으로 data setting
  const params = {
    name: $('#name').val(),
    sex: $('#sex').val(),
    age: $('#age').val(),
    pnum: $('#pnum').val()
  }

  // ajax 통신
  $.ajax({
    type: "POST", // 어떤 방식으로 가져오는가, ex) POST, GET
    url: "/", // 자원
    data: params, // 데이터
    dataType: json, // 넘겨져오는 데이터 형태
    success : function(res) {
      // 응답코드 : 200
      alert(res.code);
    },
    error : function(XMLHttpRequest,textStatus, errorThrown) {
      alert(falied); // 에러가 났을때 처리할 내용 기술
    }
  })
})