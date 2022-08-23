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
    type: "POST",
    url: "/",
    data: params,
    success : function(res) {
      // 응답코드 : 200
      alert(res.code);
    },
    error : function(XMLHttpRequest,textStatus, errorThrown) {
      alert(falied);
    }
  })
})