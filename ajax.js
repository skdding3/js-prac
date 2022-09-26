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


// ajax (form data)

var formData = ("#sms_send").serialize();
// 데이터를 직렬화 해서 post 해준다.


$.ajax({
  url: "/mng/sms/sendsms",
  data: formData,
  type:"POST",
}).done(function (data) {
  alert("문자가 전송되었습니다.");
}).fail(function(data){
  alert("전송에 실패하였습니다. 다음에 다시 시도해주십시요.");
});