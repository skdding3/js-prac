$('#address_btnpop').click(function (){
    //팝업 위치를 지정(화면의 가운데 정렬)
    var width = 500; //팝업의 너비
    var height = 600; //팝업의 높이
    new daum.Postcode({
        width: width, //생성자에 크기 값을 명시적으로 지정해야 합니다.
        height: height,
        oncomplete: function(data) { //선택시 입력값 세팅
            $("#input04").val(data.address);  // 주소 넣기
            $("input[name=address_detailpop]").focus(); //상세입력 포커싱
        }
    }).open({
        left: (window.screen.width / 2) - (width / 2),
        top: (window.screen.height / 2) - (height / 2)
    });
})