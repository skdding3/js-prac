// JQuery focus


$(function () {
    // // focusout

    // 혈압 수축기 alert
    // 왼쪽
    var pressureLeft =  $('#input1_02_1').val();

    $('#input1_02_1').focusout(function () {
        if(pressureLeft >= 160) {
            alert('5분 후 재측정 해주세요')
        }
    })
    // 오른쪽
    var pressureRight = $('#input1_02_2').val();

    $('#input1_02_2').focusout(function () {
        if(pressureRight >= 90) {
            alert('5분 후 재측정 해주세요')
        }
    })

    // like blur


    // // focusin

    $('#focus').on("focusin", function (e){ // 아이디가 "focus"인 요소에 focusin 이벤트를 설정함.
        $(this).css('backgroundColor', 'yellow');
    });

    // like focus
});